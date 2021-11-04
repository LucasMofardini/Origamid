export default function outSideClick(element, events, callback) {

    const html = document.documentElement;
    const outside = 'data-outside'

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOtusideClick);

        });
        element.setAttribute(outside, '');
    }
    function handleOtusideClick(event) {
        if (!element.contains(event.target)) {

            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOtusideClick);

            });
            callback();

        }
    }
}