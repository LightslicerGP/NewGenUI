
const FLOATING_RECT_COLLAPSED_WIDTH = 72;
const FLOATING_RECT_COLLAPSED_HEIGHT = 56;
const FLOATING_RECT_EXPANDED_WIDTH = 88;
const FLOATING_RECT_EXPANDED_HEIGHT = 72;

const FLOATING_RECT_TRANSITION_DURATION = 0.25;
const FLOATING_RECT_TRANSITION_TYPE = "ease-in-out";

const navbarTabs = document.getElementById("buttons");

let isTouchActiveOnButtons = false;
let floatingRect = null;
let floatingRectCenter = { x: null, y: null };
let allowTouchMove = false;

function getRectCenter(rect) {
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
    };
}

function updateFloatingRect(event) {
    if (!isTouchActiveOnButtons || !floatingRect) return;

    if (!(event && event.touches && event.touches.length > 0)) return;

    const touch = event.touches[0];
    const buttonsRect = navbarTabs.getBoundingClientRect();
    let x = touch.clientX - FLOATING_RECT_EXPANDED_WIDTH / 2;

    const minX = buttonsRect.left - 4;
    const maxX = buttonsRect.right - FLOATING_RECT_EXPANDED_WIDTH + 4;

    let squishX = 0, squishY = 0, offsetX = 0, offsetY = 0;

    if (touch.clientY < buttonsRect.top) {
        const dist = buttonsRect.top - touch.clientY;
        squishY = dist <= 32 ? dist / 32 : 1;
        offsetY = -Math.min(dist / 2, 16);
    } else if (touch.clientY > buttonsRect.bottom) {
        const dist = touch.clientY - buttonsRect.bottom;
        squishY = dist <= 32 ? dist / 32 : 1;
        offsetY = Math.min(dist / 2, 16);
    }

    if (touch.clientX < minX) {
        const dist = minX - touch.clientX;
        squishX = dist <= 32 ? dist / 32 : 1;
        offsetX = -Math.min(dist / 2, 16);
    } else if (touch.clientX > maxX + FLOATING_RECT_EXPANDED_WIDTH / 2) {
        const dist = touch.clientX - (maxX + FLOATING_RECT_EXPANDED_WIDTH / 2);
        squishX = dist <= 32 ? dist / 32 : 1;
        offsetX = Math.min(dist / 2, 16);
    }

    const minSquish = 0.7;
    const scaleX = 1 - (1 - minSquish) * squishX;
    const scaleY = 1 - (1 - minSquish) * squishY;

    floatingRect.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleX}, ${scaleY})`;

    x = Math.max(minX, Math.min(x, maxX));
    const y = window.innerHeight - 101;

    floatingRectCenter.x = x + FLOATING_RECT_EXPANDED_WIDTH / 2;
    floatingRectCenter.y = y + FLOATING_RECT_EXPANDED_HEIGHT / 2;

    floatingRect.style.left = `${x}px`;
    floatingRect.style.top = `${y}px`;
    floatingRect.style.display = "block";
}

function hideFloatingRectAndSlideToSelected(selectedEl) {
    if (!floatingRect) return;

    let targetRect = null;
    let width = FLOATING_RECT_EXPANDED_WIDTH;
    let height = FLOATING_RECT_EXPANDED_HEIGHT;

    if (selectedEl) {
        targetRect = selectedEl.getBoundingClientRect();
        width = targetRect.width ?? FLOATING_RECT_COLLAPSED_WIDTH;
        height = targetRect.height ?? FLOATING_RECT_COLLAPSED_HEIGHT;
    } else if (floatingRectCenter.x !== null && floatingRectCenter.y !== null) {
        targetRect = {
            left: floatingRectCenter.x - FLOATING_RECT_EXPANDED_WIDTH / 2,
            top: floatingRectCenter.y - FLOATING_RECT_EXPANDED_HEIGHT / 2,
            width: FLOATING_RECT_EXPANDED_WIDTH,
            height: FLOATING_RECT_EXPANDED_HEIGHT
        };
        width = FLOATING_RECT_EXPANDED_WIDTH;
        height = FLOATING_RECT_EXPANDED_HEIGHT;
    } else {
        floatingRect.style.display = "none";
        isTouchActiveOnButtons = false;
        return;
    }

    if (selectedEl) {
        width = FLOATING_RECT_COLLAPSED_WIDTH;
        height = FLOATING_RECT_COLLAPSED_HEIGHT;
    }

    const left = targetRect.left + (targetRect.width - width) / 2;
    const top = targetRect.top + (targetRect.height - height) / 2;
    requestAnimationFrame(() => {
        floatingRect.style.transition =
            `left ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}, ` +
            `top ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}, ` +
            `width ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}, ` +
            `height ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}, ` +
            `transform ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}`;

        floatingRect.style.width = `${width}px`;
        floatingRect.style.height = `${height}px`;
        floatingRect.style.left = `${left}px`;
        floatingRect.style.top = `${top}px`;
        floatingRect.style.transform = "";
    });
    function handleTransitionEnd(e) {
        if (
            e &&
            (e.propertyName === "left" ||
                e.propertyName === "top" ||
                e.propertyName === "width" ||
                e.propertyName === "height")
        ) {
            floatingRect.style.display = "none";
            floatingRect.removeEventListener("transitionend", handleTransitionEnd);
            floatingRect.style.width = `${FLOATING_RECT_EXPANDED_WIDTH}px`;
            floatingRect.style.height = `${FLOATING_RECT_EXPANDED_HEIGHT}px`;
            floatingRect.style.transform = "";
        }
    }
    floatingRect.addEventListener("transitionend", handleTransitionEnd);

    isTouchActiveOnButtons = false;
}

navbarTabs.addEventListener("touchstart", event => {
    isTouchActiveOnButtons = false;
    allowTouchMove = false;
    floatingRectCenter = { x: null, y: null };

    const subElements = document.getElementsByClassName("subElement");
    let selectedRect = null;
    for (let el of subElements) {
        if (el.classList.contains("selected")) {
            selectedRect = el.getBoundingClientRect();
            break;
        }
    }

    floatingRect = document.getElementById("floating-rect");
    if (!floatingRect) {
        floatingRect = document.createElement("div");
        floatingRect.id = "floating-rect";
        Object.assign(floatingRect.style, {
            position: "fixed",
            transform: "translateZ(0)",
            willChange: "left, top, width, height",
            left: "0px",
            top: "0px",
            width: `${FLOATING_RECT_EXPANDED_WIDTH}px`,
            height: `${FLOATING_RECT_EXPANDED_HEIGHT}px`,
            background: "rgba(0,0,0,0.1)",
            borderRadius: "36px",
            pointerEvents: "none",
            zIndex: 1000,
            display: "none",
        });
        document.body.appendChild(floatingRect);
    } else {
        floatingRect.style.transition = "";
    }

    floatingRect.style.width = `${FLOATING_RECT_EXPANDED_WIDTH}px`;
    floatingRect.style.height = `${FLOATING_RECT_EXPANDED_HEIGHT}px`;

    for (let el of subElements) el.classList.remove("selected");

    if (event.target.closest("#buttons")) {
        isTouchActiveOnButtons = true;
        event.preventDefault();

        if (selectedRect) {
            const left = selectedRect.left + (selectedRect.width - FLOATING_RECT_EXPANDED_WIDTH) / 2;
            const top = selectedRect.top + (selectedRect.height - FLOATING_RECT_EXPANDED_HEIGHT) / 2;

            floatingRect.style.transition = "none";
            floatingRect.style.left = `${left}px`;
            floatingRect.style.top = `${top}px`;
            floatingRect.style.display = "block";

            requestAnimationFrame(() => {
                floatingRect.style.transition =
                    `left ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},
                     top ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},
                     width ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},
                     height ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},
                     transform ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}`;

                allowTouchMove = true;
                updateFloatingRect(event);
            });

        } else {
            updateFloatingRect(event);
        }
    }

});

navbarTabs.addEventListener("touchmove", event => {
    if (!isTouchActiveOnButtons || !allowTouchMove) return;
    event.preventDefault();

    if (floatingRect && floatingRect.style.transition !== "") {
        floatingRect.style.transition = "";
    }
    updateFloatingRect(event);
});

navbarTabs.addEventListener("touchend", event => {
    if (!isTouchActiveOnButtons) return;

    event.preventDefault();
    if (floatingRect) {
        const currentTransform = floatingRect.style.transform;

        const match = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
        if (match) {
            const dx = parseFloat(match[1]);
            const dy = parseFloat(match[2]);

            const currentLeft = parseFloat(floatingRect.style.left) || 0;
            const currentTop = parseFloat(floatingRect.style.top) || 0;

            floatingRect.style.transform = "";
            floatingRect.style.left = `${currentLeft + dx}px`;
            floatingRect.style.top = `${currentTop + dy}px`;
        }
    }

    let selectedOrNearestEl = null;
    const subElements = document.getElementsByClassName("subElement");

    if (event?.changedTouches?.length > 0) {
        const touch = event.changedTouches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        for (let el of subElements) {
            const rect = el.getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                setTimeout(() => el.classList.add("selected"), (FLOATING_RECT_TRANSITION_DURATION * 1000));
                selectedOrNearestEl = el;
                break;
            }
        }
        if (!selectedOrNearestEl && subElements.length > 0) {
            let minDistance = Infinity;
            let nearestEl = null;
            for (let el of subElements) {
                const rect = el.getBoundingClientRect();
                const dx = x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
                const dy = y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
                const distance = Math.hypot(dx, dy);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestEl = el;
                }
            }
            if (nearestEl) {
                setTimeout(() => nearestEl.classList.add("selected"), (FLOATING_RECT_TRANSITION_DURATION * 1000));
                selectedOrNearestEl = nearestEl;
            }
        }
    }

    hideFloatingRectAndSlideToSelected(selectedOrNearestEl);
});

navbarTabs.addEventListener("touchcancel", event => {
    if (!isTouchActiveOnButtons) return;
    event.preventDefault();
    hideFloatingRectAndSlideToSelected(null);
});

// =========================
// ===== PWA INSTALL =======
// =========================
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

let deferredPrompt = null;
const installBtn = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "";
});

installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
});

window.addEventListener("appinstalled", () => {
    installBtn.style.display = "none";
});