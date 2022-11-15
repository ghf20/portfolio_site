import { useEffect, useState } from "react";

const inRange = (num: number ) => {
    const temp = Math.max(Math.abs(num), 0.2);
    return temp.toString(10);
}

const navEvent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    };
};

const isScrolledIntoView = (elem: HTMLElement) => {
    const rect = elem.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    return elemTop < window.innerHeight && elemBottom >= 0;
}

const ScrollPolling = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [scrollPosition, setScrollPosition] = useState(0);

    const elements = {
        about: 'aboutButton',
        projects: 'projectsButton',
        contact: 'contactButton',
    };

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        for (const key in elements) {
            const temp = document.getElementById(key);
            if (temp !== null && isScrolledIntoView(temp)) {
                // @ts-ignore
                const val1 = document.getElementById(elements[key]);
                if (val1) {
                    val1.style.opacity = inRange(temp.getBoundingClientRect().top/window.innerHeight)

                }

            } else {
                // @ts-ignore
                const val2 = document.getElementById(elements[key]);
                if (val2) {
                    val2.style.opacity = '1.0'
                }
            }
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    });


}
export { navEvent, ScrollPolling };