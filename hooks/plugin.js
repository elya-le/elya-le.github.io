import {gsap, Expo} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {store} from "@/store/store";
import Scrollbar from "smooth-scrollbar";
//--------------------------------------------------------------------------------------------
export const numberindex = (e) => (e < 10 && e + 1 != 10 ? `0${e + 1}` : e + 1 == 10 ? 10 : e + 1);
//--------------------------------------------------------------------------------------------
export const xUrl = (src) => {
    const ignore = ["data:image", "http", "https", "www", "cid:image", "data:application"];
    ignore?.forEach((e) => {
        if (src.substring(0, e.length) == e) return src;
    });
    return store.setBaseUrl + src;
};
//--------------------------------------------------------------------------------------------
export const dsnCN = (...args) => {
    return args.join(" ").trim();
};
//--------------------------------------------------------------------------------------------
export const iconsize = () => {
    const iconsize = document.querySelectorAll("[data-dsn-iconsize]");
    iconsize.forEach((icon) => icon.style.setProperty("--dsn-icon-size", icon.getAttribute("data-dsn-iconsize")));
};
//--------------------------------------------------------------------------------------------
export const setPosition = () => {
    const elPosition = document.querySelectorAll("[data-dsn-position]");
    elPosition?.forEach((icon) => icon.style.setProperty("object-position", icon.getAttribute("data-dsn-position")));
};
//--------------------------------------------------------------------------------------------
export const elScrollDown = (id) => {
    const ignore = ["#", " "];
    ignore?.forEach((e) => {
        if (id.substring(0, e.length) == e) return;
    });

    const el = document.querySelector(`#${id}`);
    if (!el) return;
    if (store.activeScrollbar) {
        const scroll = Scrollbar.get(document.querySelector("#dsn-scrollbar"));
        scroll?.scrollTo(0, el.offsetTop, 1500);
    } else {
        window?.scrollTo({behavior: "smooth", top: el.offsetTop});
    }
};
//--------------------------------------------------------------------------------------------
export const pageScrollToTop = () => {
    if (store?.activeScrollbar) {
        const scroll = Scrollbar.get(document.querySelector("#dsn-scrollbar"));
        scroll?.scrollTo(0, 0, 1500);
    } else {
        window.scrollTo({behavior: "smooth", top: 0});
    }
};
//--------------------------------------------------------------------------------------------
export const nextProject = (id, data) => {
    if (id > 1 && id != data.length) return Number(id) + 1;
    if (id > 1 && id == data.length) return 1;
    if (id == 1) return 2;
    return id;
};
//--------------------------------------------------------------------------------------------
export const setBodyClass = (value) => {
    if (!value) {
        if (document.body.classList.contains("bg-dots")) {
            document.body.classList.remove("bg-dots");
        }
        return;
    }
    return document.body.classList.add(value);
};
//--------------------------------------------------------------------------------------------
export const setBackground = () => {
    const bg = document.querySelectorAll("[data-dsn-bg]");
    bg?.forEach((item) => (item.style = `background-image:url(${xUrl(item.getAttribute("data-dsn-bg"))})`));
};
//--------------------------------------------------------------------------------------------
export const setwhitespace = () => {
    const whitespace = document.body.querySelectorAll(".chars > .dsn-word-wrapper");
    whitespace?.forEach((item) => (item.style.marginRight = "15px"));
};
//--------------------------------------------------------------------------------------------
export const gridGaps = () => {
    const dsnGap = document.querySelectorAll(".d-grid[data-dsn-gap]");
    dsnGap.forEach((item) => {
        const gap = item.getAttribute("data-dsn-gap");
        const split = gap.split(" ");
        item.style.gridGap = gap;
        item.style.setProperty("--grid-gap", gap);
        if (item.classList.contains("dsn-isotope")) {
            if (split.length > 1) {
                item.style.setProperty("--grid-gap-row", split[0]);
                item.style.setProperty("--grid-gap-col", split[1]);
                item.style.setProperty("--grid-gap", split[1]);
            } else if (split.length) {
                item.style.setProperty("--grid-gap-row", split[0]);
                item.style.setProperty("--grid-gap-col", split[0]);
                item.style.setProperty("--grid-gap", split[0]);
            }
        }
    });
};
//--------------------------------------------------------------------------------------------
export const parallaxIt = (e, target, options) => {
    const {width, height, left, top} = target.getBoundingClientRect();
    const relX = e.pageX - left;
    const relY = e.pageY - top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const {speed, move: movement} = options;
    gsap.to(target, speed, {
        x: ((relX - width / 2) / width) * movement,
        y: ((relY - height / 2 - scrollTop) / width) * movement,
        ease: "Power0.easeOut",
    });
};
//--------------------------------------------------------------------------------------------
export const runParallaxIt = () => {
    const options = Object.assign({}, {speed: 0.5, move: 20});
    const parallaxHover = document.body.querySelectorAll('[data-dsn="parallax"]');
    parallaxHover.forEach((item) => {
        /**
         * Append Icon
         */
        const icon = document.createElement("div");
        icon.classList.add("icon-circle");
        icon.style.minWidth = "1px";
        item.appendChild(icon);
        item.removeAttribute("data-dsn");
        item.classList.add("dsn-parallax-hover");
        const scale = item.classList.contains("image-zoom");
        const moveIcon = item.classList.contains("move-circle");
        const mouseEnter = (e) => {
            if (scale) {
                gsap.to([item, icon], 0.3, {scale: 1.03});
            }
        };
        const mouseLeave = (e) => {
            gsap.to([item, icon], 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "Back.easeOut.config(4)",
            });
        };
        const mouseMove = (e) => {
            parallaxIt(e, item, options);
            if (moveIcon) parallaxIt(e, icon, {...options, move: options.move * 2});
        };
        /**
         * Event
         */
        item.addEventListener("mouseenter", mouseEnter);
        item.addEventListener("mouseleave", mouseLeave);
        item.addEventListener("mousemove", mouseMove);
    });
};
//--------------------------------------------------------------------------------------------
export const smoothScrollBar = () => {
    const scroller = document.querySelector("#dsn-scrollbar");
    if (!scroller) return;
    if (!store.activeScrollbar) return;
    document.body.setAttribute("style", "overflow-y:hidden;height:100vh");
    scroller.setAttribute("style", "overflow-y:visible;height:100vh !important");
    const bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.1,
        continuousScrolling: true,
        delegateTo: document,
        alwaysShowTracks: false,
        stagger: false,
        invalidateOnRefresh: true,
    });
    ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
    });
    bodyScrollBar?.addListener(ScrollTrigger.update);
    ScrollTrigger?.defaults({scroller});
};
//--------------------------------------------------------------------------------------------
export function cursorGrowing() {
    const cursor = document.querySelector(".dsn_cursor");
    const elHaveScale = document.querySelectorAll(".effect-ajax");
    if (!cursor) return;
    if (!elHaveScale) return;
    elHaveScale.forEach((item) => {
        item.addEventListener("mousemove", () => {
            if (!cursor) return;
            cursor.classList.add("grow");
            if (item.classList.contains("small")) {
                cursor.classList.remove("grow");
            }
        });
        item.addEventListener("mouseleave", () => {
            if (!cursor) return;
            cursor.classList.remove("grow");
            cursor.classList.add("non-grow");
        });
    });
}
//--------------------------------------------------------------------------------------------
/**
 *
 * @param startTime
 * @param endTime
 * @param duration
 * @param current_timer
 * @returns {number}
 */
export function pageLoad(startTime, endTime, duration, current_timer) {
    const performanceTiming = window.performance.timing;
    const time = ((((performanceTiming.loadEventEnd - performanceTiming.navigationStart) * -1) / 1000) % 50) * 10;
    let currentStartTime = startTime;
    const increment = endTime > startTime ? 1 : -1;
    const stepTime = Math.abs(Math.floor((time + duration) / 100));
    const timer = setInterval(() => {
        currentStartTime += increment;
        current_timer(currentStartTime);
        if (currentStartTime >= endTime) {
            clearInterval(timer);
        }
    }, stepTime);
    return timer;
}
//--------------------------------------------------------------------------------------------
export const runOnLoad = () => {
    iconsize();
    setBackground();
    setwhitespace();
    setPosition();
    gridGaps();
    runParallaxIt();
    cursorGrowing();
};
//--------------------------------------------------------------------------------------------
export const pathExists = (variable) => {
    const image = new Image();
    const url_image = xUrl(variable);
    image.src = url_image;
    return image.width == 0 ? false : true;
};
let showAnim = null;
export function hideNav() {
    const menu = document.querySelector(".site-header");
    setTimeout(() => {
        showAnim = gsap.from(menu, {top: -70, duration: 0.5}).progress(1);
        ScrollTrigger.create({
            onUpdate: (self) => {
                if (menu.classList.contains("dsn-open")) {
                    showAnim?.kill;
                } else if (self.direction === -1) {
                    showAnim.play();
                } else {
                    showAnim.reverse();
                }
            },
            onEnter() {
                menu.style = "background-color: var(--bg-color);";
            },
            onToggle() {
                showAnim.play();
                menu.style = "background-color: transparent;";
            },
            mounted() {
                window.onbeforeunload = () => {
                    return showAnim.kill();
                };
            },
            unmounted() {
                showAnim?.kill;
            },
        });
    }, 1);
}
/**
 *
 * @param props {
 *     {
 *     canvas : HTMLCanvasElement | null,
 *     displacement?: string,
 *     data?: any[]  | undefined,
 *     intensity?: number ,
 *     direction?: "vertical" | "horzintal" | string | undefined,
 *         onComplete?: void | undefined,
 *         speedIn?: number,
 *         easing?: any,
 *         parent :HTMLDivElement,
 *         sliderSwiper :swiper | any
 *
 *     }
 * }
 */
import displacementimg from "assets/img/displacement/8.jpg";
export default function webGelTransition(props) {
    if (!props.canvas) return false;
    const vertex = `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`;
    const {
        displacement = displacementimg,
        data = [],
        intensity = 1,
        direction,
        onComplete,
        speedIn = 1.6,
        easing = Expo.easeOut,
        parent,
        sliderSwiper,
    } = props;
    const $this = {
        scene: undefined,
        width: undefined,
        height: undefined,
        ratio: undefined,
        video: false,
        renderer: undefined,
        camera: undefined,
        manager: undefined,
        loader: undefined,
        disp: undefined,
        allImgs: [],
        mat: undefined,
        geometry: undefined,
        plane: undefined,
        animate: undefined,
        destroyed: false,
        current: 0,
        imageAspect: undefined,
        changeTo: undefined,
    };
    /**
     *
     * @returns {Promise<WebGLRenderer>}
     */
    const getRenderer = async () => {
        $this.ratio = window.devicePixelRatio;
        // low-power || high-performance || default
        return new THREE.WebGLRenderer({
            canvas: props.canvas,
            powerPreference: "default",
            antialias: !1,
            alpha: true,
        });
    };
    /**
     *
     * @param src {string | undefined}
     * @param $index {number | undefined}
     */
    const video = (src, $index) => {
        let dImg = new THREE.VideoTexture(src);
        dImg.magFilter = THREE.LinearFilter;
        dImg.minFilter = THREE.LinearFilter;
        dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
        $this.allImgs[$index] = dImg;
    };

    /**
     *
     * @param src {string | undefined}
     * @param $index {number | undefined}
     */
    const image = (src, $index) => {
        const dImg = $this.loader.load(xUrl(src));
        dImg.magFilter = THREE.LinearFilter;
        dImg.minFilter = THREE.LinearFilter;
        dImg.anisotropy = $this.renderer.capabilities.getMaxAnisotropy();
        $this.allImgs[$index] = dImg;
    };

    /**
     *
     * @param direction {"horizontal" | string}
     *
     * @return string
     */
    const getFragment = (direction) => {
        let dir = "";
        dir =
            direction === "horizontal"
                ? ` vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

            `
                : `vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
					vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));`;

        return `
        varying vec2 vUv;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        uniform float dispFactor;
        uniform float effectFactor;
		uniform vec4 resolution;

        void main() {
            vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            vec4 disp = texture2D(disp, uv);
            ${dir}
            vec4 _texture = texture2D(texture1, distortedPosition);
            vec4 _texture2 = texture2D(texture2, distortedPosition2);
            vec4 finalTexture = mix(_texture, _texture2, dispFactor);
            gl_FragColor = finalTexture;
        }
    `;
    };

    /**
     *
     */
    const resize = () => {
        if (!$this.allImgs[sliderSwiper.swiper.activeIndex]) return;
        const image = $this.allImgs[sliderSwiper.swiper.activeIndex].image;
        $this.width = parent.offsetWidth;
        $this.height = parent.offsetHeight;
        $this.renderer.setSize($this.width, $this.height);
        $this.camera.aspect = $this.width / $this.height;
        $this.imageAspect = image.height / image.width;
        let a1;
        let a2;
        if ($this.height / $this.width > $this.imageAspect) {
            a1 = ($this.width / $this.height) * $this.imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = $this.height / $this.width / $this.imageAspect;
        }
        const dist = $this.camera.position.z;
        const height = 1;
        $this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));
        $this.plane.scale.x = $this.camera.aspect;
        $this.plane.scale.y = 1;
        gsap.to($this.mat.uniforms.resolution.value, 0.1, {
            x: $this.width,
            y: $this.height,
            z: a1,
            w: a2,
            yoyo: true,
            onUpdate: () => {
                $this.camera.updateProjectionMatrix();
                $this.animate();
            },
            ease: "none",
        });
    };

    /**
     *
     */
    const destroy = () => {
        $this.destroyed = true;
        window.removeEventListener("resize", resize);
        $this.renderer.forceContextLoss();
        $this.renderer.dispose();
        $this.renderer = null;
        $this.manager = null;
        $this.video = null;
        $this.geometry.dispose();
        $this.geometry = null;
        $this.mat.dispose();
        $this.mat = null;
        $this.plane = null;
        $this.loader = null;
        $this.ratio = null;
        $this.scene.dispose();
        $this.scene = null;
        $this.width = $this.height = $this.imageAspect = null;
    };

    /**
     *
     * @param current
     * @param oldIndex
     */
    $this.changeTo = (current, oldIndex) => {
        if (current > oldIndex) $this.mat.uniforms.effectFactor.value = intensity;
        else $this.mat.uniforms.effectFactor.value = intensity * -1;
        $this.mat.uniforms.texture1.value = $this.allImgs[oldIndex];
        $this.mat.uniforms.texture2.value = $this.allImgs[current];
        gsap.fromTo(
            $this.mat.uniforms.dispFactor,
            speedIn,
            {value: 0},
            {
                value: 1,
                ease: easing,
                onStart: resize,
                onUpdate: $this.animate,
            }
        );
    };
    parent.classList.add("three-js-loader", "bg-three-js");
    $this.scene = new THREE.Scene();
    $this.width = window.innerWidth;
    $this.height = window.innerHeight;
    getRenderer()
    .then((renderer) => {
        $this.renderer = renderer;
        $this.renderer.setPixelRatio(window.devicePixelRatio);
        $this.renderer.setClearColor(0xff_ff_ff, 0.0);
        $this.renderer.setSize($this.width, $this.height);
        $this.width = parent.offsetWidth;
        $this.height = parent.offsetHeight;
        return $this.renderer;
    })
    .then(() => {
        $this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
        $this.camera.position.set(0, 0, 2);
        return $this.camera;
    })
    .then(() => {
        $this.manager = new THREE.LoadingManager();
        return $this.manager;
    })
    .then((manager) => {
        $this.loader = new THREE.TextureLoader(manager);
        $this.disp = $this.loader.load(displacement);
        $this.disp.wrapS = $this.disp.wrapT = THREE.RepeatWrapping;

        data.forEach((item, x) => {
            image(item.images[0].src, x);
        });
        return $this.allImgs;
    })
    .then(() => {
        $this.mat = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms: {
                effectFactor: {type: "f", value: intensity},
                dispFactor: {type: "f", value: 0},
                texture1: {type: "t", value: $this.allImgs[0]},
                texture2: {type: "t", value: $this.allImgs[0]},
                disp: {type: "t", value: $this.disp},
                resolution: {type: "v4", value: new THREE.Vector4()},
            },
            vertexShader: vertex,
            fragmentShader: getFragment(direction),
            transparent: true,
            opacity: 1.0,
        });
        return $this.mat;
    })
    .then((mat) => {
        $this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
        $this.plane = new THREE.Mesh($this.geometry, mat);
        return $this.plane;
    })
    .then((plane) => {
        $this.scene.add(plane);
    })
    .then(() => {
        const swiper = sliderSwiper.swiper;
        if (swiper) {
            swiper.dsnOnChange = (activeIndex, oldIndex) => {
                $this.changeTo(activeIndex, oldIndex);
            };
        }
    })
    .then(() => {
        $this.animate = () => {
            $this.renderer.render($this.scene, $this.camera);
        };
        const load = () => {
            requestAnimationFrame(load);
            if ($this.video) $this.renderer.render($this.scene, $this.camera);
        };
        $this.manager.onLoad = () => {
            parent.classList.remove("three-js-loader");
            if ($this.destroyed) {
                destroy();
                return;
            }
            resize();
            window.addEventListener("resize", resize);
            onComplete && onComplete.bind($this)();
        };
    });
}
