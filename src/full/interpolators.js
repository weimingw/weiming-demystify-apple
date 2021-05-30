export function getInterpolators() {
    function firstSectionInterpolator(proportion) {
        if (proportion < 0) {
            return { opacity: 0, transform: `scale(${4})` };
        } else if (proportion < 0.1) {
            return {
                opacity: proportion * 10,
                transform: `scale(${4 - (4 - 1) * proportion * 10})`,
            };
        } else if (proportion < 1) {
            return {
                opacity: 1,
            };
        } else if (proportion < 1.1) {
            return {
                opacity: (1.1 - proportion) * 10,
                transform: `scale(${4 - (1.1 - proportion) * 10 * 3})`,
            };
        } else {
            return { opacity: 0 };
        }
    }

    function secondSectionBackgroundInterpolator(proportion) {
        if (proportion < -0.3) {
            return { transform: `translateY(20rem) scaleX(0.05)` };
        } else if (proportion < 0) {
            const position = -proportion * 20 * 3.3;
            const scale = 1 + proportion * 3.3 * 0.95;
            return { transform: `translateY(${position}rem) scaleX(${scale})` };
        } else if (proportion < 1) {
            return {};
        } else if (proportion < 1.3) {
            const scale = (1.3 - proportion) / 0.3;
            return { transform: `scaleX(${scale})` };
        } else {
            return { transform: 'scaleX(0)' };
        }
    }

    function secondSectionForegroundInterpolator(proportion) {
        if (proportion < 0) {
            return { opacity: 0, transform: 'translateX(-20rem)' };
        } else if (proportion > 1) {
            return { opacity: 0, transform: 'translateX(20rem)' };
        } else {
            return {};
        }
    }

    function thirdSectionInterpolator(proportion) {}

    return {
        firstSectionInterpolator,
        secondSectionBackgroundInterpolator,
        secondSectionForegroundInterpolator,
    };
}
