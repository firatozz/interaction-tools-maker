< script >
    function test() {

        var settings = {};


        var x = document.querySelector(".swFunctionalPopup");
        if (x == null) {

            var t = document.querySelector("#widthPre").value;
            if (t != '') {
                settings.width = t;
            }

            var t = document.querySelector("#heightPre").value;
            if (t != '') {
                settings.height = t;
            }

            var t = document.querySelector("#delayPre").value;
            if (t != '') {
                settings.delay = t;
            }

            var t = document.querySelector("#cookieExpPre").value;
            if (t != '') {
                settings.cookieExp = t;
            }

            var t = document.querySelector("#showCountPageviewsPre").value;
            if (t != '') {
                settings.showCountPageviews = t;
            }

            var t = document.querySelector("#imageurlPre").value;
            if (t != '') {
                settings.imageUrl = t;
            }

            var t = document.querySelector("#targetLinkPre").value;
            if (t != '') {
                settings.targetUrl = t;
            }

            var t = document.querySelector("#autoClosePre").value;
            if (t != '') {
                settings.autoClose = t;
            }

            var t = document.querySelector("#targetOpenNewTabPre").checked;
            if (t != false) {
                settings.targetOpenNewTab = t;
            }

            var t = document.querySelector("#canScrollPre").checked;
            if (t != false) {
                settings.canScroll = t;
            }

            var t = document.querySelector("#showAsExitIntentPre").checked;
            if (t != false) {
                settings.showAsExitIntent = t;
            }

            var t = document.querySelector("#showOncePerSessionPre").checked;
            if (t != false) {
                settings.showOncePerSession = t;
            }

            var t = animation.options[animation.selectedIndex].value;
            if (t != '') {
                settings.animation = t;
            }


            var string = `
var popUp1 = new sweetFunctionalPopup();
popUp1.setOptions({`;
            var stringValues = ["imageUrl", "animation", "targetUrl"];

            var string1 = '';

            if (Object.keys(settings).length > 0) {

                Object.keys(settings).forEach((key, index, self) => {
                    if (stringValues.indexOf(key) != -1)
                        string1 += "\n\t" + key + ": \"" + settings[key] + "\",";
                    else
                        string1 += "\n\t" + key + ": " + settings[key] + ",";
                })
                string1 = string1.substr(0, string1.length - 1);
                string1 += "\n";
            }
            string += string1;


            string += `});\n`;


            document.getElementById('code-section').innerHTML = string;
            Prism.highlightAll();

            var popUp1 = new sweetFunctionalPopup();

            popUp1.setOptions(settings);
        }
    } <
    /script>