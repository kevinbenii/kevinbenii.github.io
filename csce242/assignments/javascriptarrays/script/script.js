//Shows the beach destinations
const beaches = [];
beaches["Myrtle Beach"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424775.6173417191!2d-79.21516646249677!3d33.72034530294511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790338929577!5m2!1sen!2sus";
beaches["Copacabana"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58774.311802893295!2d-43.22498978056228!3d-22.972516851877664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd523d20f9c53%3A0x693c6132635e6b0d!2sCopacabana%2C%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sus!4v1790339019862!5m2!1sen!2sus";
beaches["Tybee Island"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108264.8735598652!2d-80.94407749406231!3d32.007601439633305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb7f73b7a88301%3A0x4207db76949a9818!2sTybee%20Island%2C%20GA!5e0!3m2!1sen!2sus!4v1790339041488!5m2!1sen!2sus";
beaches["Wilmington Beach"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52911.60314000418!2d-77.93979629547232!3d34.01884762371568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f8c2116991d7%3A0xdc6ef7bd39f408c1!2sWilmington%20Beach%2C%20Carolina%20Beach%2C%20NC%2028428!5e0!3m2!1sen!2sus!4v1790339056184!5m2!1sen!2sus";

//Shows the mountain destinations
const mountains = [];
mountains["Asheville"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415577.69198053563!2d-82.89505874848568!3d35.53639284116986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1790338433892!5m2!1sen!2sus";
mountains["Boone"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206033.51755120346!2d-81.82817637800026!3d36.208541561623356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e0!3m2!1sen!2sus!4v1790338471806!5m2!1sen!2sus";
mountains["Hot Springs"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103426.33904072164!2d-82.91123680073878!3d35.89622542209262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e0!3m2!1sen!2sus!4v1790338501233!5m2!1sen!2sus";
mountains["Table Rock"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51716.56808947366!2d-81.92408557804582!3d35.89102260067317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850b8b9fdfebc2f%3A0xd8c8e189b89c9adf!2sTable%20Rock%20Mountain!5e0!3m2!1sen!2sus!4v1790338528245!5m2!1sen!2sus";

//Pages the elements
const select = document.getElementById("destination-type");
const list = document.getElementById("destination-list");
const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");

//Hides the map
const hideMap = () => {
    mapContainer.classList.add("hidden");
    map.src = "";
};

//Shows the destination links
const showDestinations = () => {
    list.innerHTML = "";
    hideMap();

    //Pick the array
    let destinations;
    if (select.value == "mountains") {
        destinations = mountains;
    } else if (select.value == "beaches") {
        destinations = beaches;
    } else {
        return;
    }

    for (let name in destinations) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = name;

        a.onclick = (e) => {
            e.preventDefault();
            showMap(destinations[name], a);
        };

        li.append(a);
        list.append(li);
    }
};

//Shows the map
const showMap = (url, link) => {
    document.querySelectorAll("#destination-list a").forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
    map.src = url;
    mapContainer.classList.remove("hidden");
};

//Updates the links on change
select.onchange = showDestinations;