$(document).on('ready', function () {
    $(".x-image-medical-sp").each(function () {
        $(this).image();
    });
});

$(document).on('ready', function () {
    $(".x-image-medical-sp").each(function () {
        $(this).image();
    });
});

$(document).on('ready', function () {
    $(".x-comment_popup-medical-sp").each(function () {
        $(this).commentPopUp();
    });
});

$(document).on('ready', function () {
    $(".x-scroll_box-medical-sp").each(function () {
        $(this).scrollBox();
    });
});

$(document).on('ready', function () {
    $(".x-image-medical-sp").each(function () {
        $(this).image();
    });
});

$(document).on('ready', function () {
    $(".x-testimonial-slider_mobile-medical-sp").each(function () {
        $(this).find('.slides').slick({
            dots: false,
            appendArrows: '.slide-buttons',
            nextArrow: '<a class="slide-next"><i></i></a>',
            prevArrow: '<a class="slide-back"><i></i></a>',
            adaptiveHeight: true
        });
    });
});

$(document).on('ready', function () {
    $(".x-offer-medical-sp").each(function () {
        $(this).productCounter();
        $(this).guarantee();
    });
});

$(document).on('ready', function () {
    $(".x-bibliography-medical-sp").each(function () {
        $(this).bibliography();
    });
});

!(function ($, window, document, undefined) {
    "use strict";

    var sticky_bar1 = true;

    if (sticky_bar1 === true) {
        setTimeout(function () {
            $('.b1').fadeIn('slow');
        }, 1000);
    }

    window.addEventListener("scroll", function () {
        if (sticky_bar1 === true) {
            if ($(window).scrollTop() > $('.sticky_bar1-on').offset().top) {
                setTimeout(function () {
                    $('.b1').fadeIn('slow');
                }, 1000);
                setTimeout(function () {
                    $('.b1').fadeOut('slow');
                }, 5000);
                sticky_bar1 = false;
            }
        }
    });

})(jQuery, window, document);

!(function ($, window, document) {
    'use strict';

    var pluginName = 'commentPopUp',
        defaults = {
            nextArrow: '<a class="next btn-bar buttons"></a>',
            prevArrow: '<a class="prev btn-bar buttons"></a>',
        };

    function CommentPopUp(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    $.extend(CommentPopUp.prototype, {
        init: function () {
            this.buildCache();

            this.$element.find('.slides').slick({
                dots: false,
                appendArrows: this.settings.wrapperArrows,
                nextArrow: this.settings.nextArrow,
                prevArrow: this.settings.prevArrow,
                fade: true,
                adaptiveHeight: true
            });

            this.$element.css('opacity', 1);
        },
        buildCache: function () {
            this.$element = $(this.element);
        },
    });
    ($.fn.commentPopUp = function (options) {
        return this.each(function () {
            $.data(this, "plugin_" + pluginName) ||
            $.data(this, "plugin_" + pluginName, new CommentPopUp(this, options));
        });
    });
})(jQuery, window, document);

!(function ($, window, document, undefined) {
    "use strict";

    $(document).ready(function () {
        $('body').css('position', 'relative'); //endure body has this because its needed to stick other container
        if ($('.sticky_bar_container').length === 0) {

            let sticky_bar_container = $('<div></div>');
            $(sticky_bar_container).addClass('sticky_bar_container');
            $(sticky_bar_container).css('position', 'sticky');
            $(sticky_bar_container).css('top', '0');
            $(sticky_bar_container).css('z-index', '1000');

            $('body').prepend($(sticky_bar_container));

        }
        $('body').find('.sticky_bar_container').prepend($('.sticky_bar')); //move to body to stick container on it
    });

    var sticky_bar3 = true;

    window.addEventListener("scroll", function () {

        if (sticky_bar3 === true) {

            if ($(window).scrollTop() > $('.sticky_bar3-on').offset().top) {
                sticky_bar3 = false;

                $('.sticky_bar .fly-box').hide();
                $('.b3').fadeIn('slow');

                setTimeout(function () {
                    $('.b3').fadeOut('slow');
                }, 5000);
            }

        }
    });

})(jQuery, window, document);

!(function ($, window, document, undefined) {

    "use strict";

    $(document).ready(function () {
        $('body').css('position', 'relative'); //endure body has this because its needed to stick other container
        if ($('.sticky_bar_container').length === 0) {

            let sticky_bar_container = $('<div></div>');
            $(sticky_bar_container).addClass('sticky_bar_container');
            $(sticky_bar_container).css('position', 'sticky');
            $(sticky_bar_container).css('top', '0');
            $(sticky_bar_container).css('z-index', '1000');

            $('body').prepend($(sticky_bar_container));

        }
        $('body').find('.sticky_bar_container').prepend($('.sticky_bar_6')); //move to body to stick container on it
    });

    var sticky_bar7 = true;
    var sticky_bar6 = true;

    function countdown(element, minutes, seconds) {
        if (sticky_bar7 === true) {
            var time = minutes * 60 + seconds;
            var interval = setInterval(function () {
                var el = document.querySelector(element);
                if (time <= 0) {
                    el.innerHTML = "00:00";
                    setTimeout(function () {
                        countdown('clock', 0, 5);
                    }, 2000);
                    clearInterval(interval);
                    return;
                }
                var minutes = Math.floor(time / 60);
                if (minutes < 10) minutes = "0" + minutes;
                var seconds = time % 60;
                if (seconds < 10) seconds = "0" + seconds;
                var text = minutes + ':' + seconds;
                el.innerHTML = text;
                time--;
            }, 1000);
        }

    }

    window.addEventListener("scroll", function () {
        if (sticky_bar6 === true) {
            if ($(window).scrollTop() > $('.sticky_bar6-on').offset().top) {
                sticky_bar6 = false;

                $('.b5').hide();
                $('.b6').fadeIn('slow');
                countdown('.b6_counter', 3, 0);

                setTimeout(function () {
                    $('.b6').fadeOut('slow');
                    $('.b7').fadeIn('slow');
                    sticky_bar7 = false;
                    $('.cta_fly').click(function () {
                        $('html, body').animate({
                            scrollTop: $(".container__form").offset().top
                        }, 1000);
                        $('.b7').fadeOut('slow');
                    });
                }, 180000);

            }
        }
    });

})(jQuery, window, document);

(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'guarantee';

    function Guarantee(element, options) {
        this.element = element;
        this._name = pluginName;

        this.init();
    }

    $.extend(Guarantee.prototype, {

        // Initialization logic
        init: function () {

            this.buildCache();
            this.bindEvents();
        },

        // Remove plugin instance completely
        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
        },

        // Cache DOM nodes for performance
        buildCache: function () {
            this.$element = $(this.element);

        },

        // Bind events that trigger methods
        bindEvents: function () {
            var plugin = this;
            let $img = this.$element.find(".offer-img")

            $img.one("load", function () {
                plugin.setGuaranteePosition.call(plugin)
            }).each(function () {
                if (this.complete) {
                    $(this).load(plugin.setGuaranteePosition.call(plugin));
                }
            });
        },

        // Unbind events that trigger methods
        unbindEvents: function () {
            this.$element.off('.' + this._name);
        },

        // Create custom methods
        setGuaranteePosition: function () {
            const $img = this.$element.find(".offer-img");
            const $gwa = this.$element.find(".offer-g");

            if ($img.height() > $img.width()) {
                $gwa.css({
                    "width": `${$img.height() * 0.200}px`,
                    "height": `${$img.height() * 0.200}px`,
                    "top": `${$img.height() * 0.02}px`,
                    "left": `${$img.width() * 0.65}px`
                });
            } else {
                $gwa.css({
                    "width": `${$img.height() * 0.3}px`,
                    "height": `${$img.height() * 0.3}px`,
                    "top": `${$img.height() * 0.02}px`,
                });
            }
        },

    });

    $.fn.guarantee = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Guarantee(this, options));
            }
        });
        return this;
    };


})(jQuery, window, document);

(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'productCounter';
    var borderPosition = 0;

    function ProductCounter(element, options) {
        this.element = element;
        this._name = pluginName;

        this.init();

    }

    $.extend(ProductCounter.prototype, {
        init: function () {
            this.buildCache();
            this.bindEvents();
        },
        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
            this.$borderPosition.removeData();
        },
        buildCache: function () {
            this.$element = $(this.element);
            this.$borderPosition = $(this.$borderPosition);
            this.$borderCross = $(this.borderCross);
            this.$startValue = 21;

        },
        bindEvents: function () {
            var plugin = this;
            this.$borderPosition = this.$element.offset();
            var scrollHandler = function () {
                plugin.checkScrollPosition.call(plugin);
            }
            $(window).on("scroll", scrollHandler);
        },
        checkScrollPosition: function () {
            var plugin = this;
            if (this.$borderPosition.top < $(window).scrollTop() + $(window).height()) {
                this.$borderCross = true;
                $(window).off("scroll", this.scrollHandler);
                plugin.startUpdating.call(plugin);
            }
        },
        startUpdating: function () {
            var myCounter = 0;
            var plugin = this;
            setInterval(function () {
                var randomTimeOffset = Math.floor((Math.random() * 30) + 1);
                var buyInterval = 60;
                myCounter++;
                if (myCounter > (buyInterval + randomTimeOffset)) {

                    myCounter = 0;
                    plugin.updateCounter.call(plugin);
                }
            }, 1000);
        },
        unbindEvents: function () {
            this.$element.off('.' + this._name);
        },
        showCounter: function () {

        },
        updateCounter: function () {
            var decimal = this.$element.find(".decimal");
            var endValue = 7;
            var unity = this.$element.find(".units");
            if (this.$startValue > endValue) {
                this.$startValue--;
                var decimalOut;
                var unityOut;

                if (this.$startValue > 9) {
                    decimalOut = Math.floor(this.$startValue / 10);
                    unityOut = this.$startValue % 10;
                    decimal.text(decimalOut);
                    unity.text(unityOut);

                } else if (this.$startValue >= endValue) {
                    decimal.text(0);
                    unity.text(this.$startValue);

                }
            }
        }
    });
    $.fn.productCounter = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new ProductCounter(this, options));
            }
        });
        return this;
    };
})(jQuery, window, document);

$(document).ready(function () {
    $('.footer_text').hide();
    $($('.footer_text')[0]).show();
});

(function ($, window, document, undefined) {

    "use strict";

    let pluginName = "bibliography";

    function bibliography(element, options) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    $.extend(bibliography.prototype, {
        init: function () {
            this.buildCache();
            this.bindEvents();
        },

        // Remove plugin instance completely
        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
        },

        // Cache DOM nodes for performance
        buildCache: function () {
            this.$element = $(this.element);
        },

        // Bind events that trigg
        bindEvents: function () {
            let plugin = this;

            plugin.showBibliography.call(plugin);
        },

        showBibliography: function () {

            // console.log(Object.keys(bibligraphyJSON));

            // console.log(bibligraphyJSON);


            let headline = this.$element.find('.headline'),
                list = this.$element.find('.list')

            headline.on("click", function (event) {
                list.slideToggle();
            })
        },
    });

    $.fn.bibliography = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new bibliography(this, options));
            }
        });
    };

})(jQuery, window, document);

(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'image';

    function Image(element, options) {
        this.element = element;
        this._name = pluginName;

        this.init();
    }

    $.extend(Image.prototype, {

        // Initialization logic
        init: function () {
            this.buildCache();
            this.bindEvents();
        },

        // Remove plugin instance completely
        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
        },

        // Cache DOM nodes for performance
        buildCache: function () {
            this.$element = $(this.element);

        },

        // Bind events that trigger methods
        bindEvents: function () {
            var plugin = this;
            let $img = this.$element.find("img");
            $img.on("load", function () {
                plugin.someOtherFunction.call(plugin);
            }).each(function () {
                if (this.complete) {
                    $(this).load(plugin.someOtherFunction.call(plugin));
                }
            });
        },

        // Unbind events that trigger methods
        unbindEvents: function () {
            this.$element.off('.' + this._name);
        },

        // Create custom methods
        someOtherFunction: function () {
            var justify = {
                "rtl": {
                    "center": "center",
                    "left": "flex-end",
                    "right": "flex-start",
                },
                "ltr": {
                    "center": "center",
                    "left": "flex-start",
                    "right": "flex-end",
                }
            }
            var direction = "ltr";
            this.$element.find(".text-container").css("justify-content", justify[direction][this.$element.css("text-align")]);
            if (this.$element.find(".text-container").find("div").length > 0)
                this.$element.find(".text-container").find("div").css("justify-content", justify[direction][this.$element.css("text-align")]);
            this.$element.find(".text-container").find('p').css("max-width", this.$element.find("img").width());
        },

    });

    $.fn.image = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Image(this, options));
            }
        });
        return this;
    };


})(jQuery, window, document);

(function ($, window, document, undefined) {

    "use strict";

    var pluginName = "scrollBox";

    function ScrollBox(element, options) {
        this.element = element;
        this.container = null;

        this._name = pluginName;
        this.init();
    }

    $.extend(ScrollBox.prototype, {
        init: function () {
            var elem = this.element;
            this.container = $(this.element);
            this.container.click(this.scroll);
        },
        scroll: function (elem) {
            $('html, body').animate({
                scrollTop: $(".scroll_box").offset().top + $(".scroll_box").height()
            }, 1000);
        }
    });

    $.fn.scrollBox = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new ScrollBox(this, options));
            }
        });
    };

})(jQuery, window, document);

const scrollSmooth = (function () {
    $(document).on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 100
        }, 500);
    });
});
scrollSmooth();

function hidePopupSlider() {
    const sliderContainer = document.querySelector('.x-comment_popup-medical-sp'),
          sliderCloseBtn = document.querySelector('.popup-close')

    sliderCloseBtn.addEventListener('click', function () {
        sliderContainer.classList.add('popup-hidden')
    })
}
hidePopupSlider();

function checkWebp() {
    const WebP = new Image();
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    WebP.onload = WebP.onerror = function() {
        let isWebp = (WebP.height === 2);
        if (!isWebp) {
            document.querySelector('body').classList.remove('webp');
        }
    };
}
checkWebp();