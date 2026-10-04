class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    //Builds the card
    getCard() {
        const section = document.createElement("section");
        section.classList.add("vacation");
        section.append(this.getHeader(), this.getImage());
        section.onclick = () => this.showDetails();
        return section;
    }

    //Card title and type
    getHeader() {
        const header = document.createElement("div");
        header.classList.add("card-header");
        header.append(
            createElement("h3", this.title),
            createElement("p", `${this.type} Vacation`)
        );
        return header;
    }

    //Card image
    getImage() {
        const img = document.createElement("img");
        img.src = `images/${this.image}`;
        img.alt = this.title;
        return img;
    }

    //Label
    getDetail(label, text) {
        const p = document.createElement("p");
        p.append(createElement("strong", `${label}: `), text);
        return p;
    }

    //Pop-up
    showDetails() {
        document.getElementById("modal-map").src = this.mapSrc;
        document.getElementById("modal-details").replaceChildren(
            createElement("h2", this.title),
            this.getDetail("Type", this.type),
            this.getDetail("Description", this.description),
            this.getDetail("Things To Do", this.thingsToDo)
        );
        openModal();
    }
}

//Helpers

const createElement = (tag, text) => {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
};

const openModal = () => {
    document.getElementById("vacation-modal").style.display = "block";
};

const closeModal = () => {
    document.getElementById("vacation-modal").style.display = "none";
    document.getElementById("modal-map").src = "";
};

//Vacation list

const vacations = [
    new Vacation(
        "Asheville", "Mountain",
        "A city in the Blue Ridge Mountains known for its vibrant arts scene and historic architecture.",
        "Tour the Biltmore Estate, see the Basilica of Saint Lawrence, explore the River Arts District.",
        "ashville.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415577.6919805357!2d-82.89505874848567!3d35.53639284116984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e1!3m2!1sen!2sus!4v1791134610927!5m2!1sen!2sus"
    ),
    new Vacation(
        "Boone", "Mountain",
        "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
        "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
        "boone.jpg",
        "https://maps.google.com/maps?q=Boone%2C%20NC&t=k&z=11&output=embed"
    ),
    new Vacation(
        "Hot Springs", "Mountain",
        "A small Madison County town on the Appalachian Trail and French Broad River near the Tennessee border.",
        "Soak in the natural hot springs, raft the French Broad River, hike the Appalachian Trail.",
        "hotsprings.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103426.33904072164!2d-82.91123680073878!3d35.89622542209262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e1!3m2!1sen!2sus!4v1791134678714!5m2!1sen!2sus"
    ),
    new Vacation(
        "Table Rock", "Mountain",
        "An iconic mountain peak in Pisgah National Forest overlooking the Linville Gorge.",
        "Hike to the summit, go rock climbing, take in views of the Linville Gorge.",
        "tablerock.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51716.56808947366!2d-81.92408557804582!3d35.89102260067317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850b8b9fdfebc2f%3A0xd8c8e189b89c9adf!2sTable%20Rock%20Mountain!5e1!3m2!1sen!2sus!4v1791134688643!5m2!1sen!2sus"
    ),
    new Vacation(
        "Sunset Beach", "Beach",
        "A quiet seaside town in Brunswick County and the southernmost beach in North Carolina.",
        "Watch the sunset from the pier, visit the Kindred Spirit mailbox, walk to Bird Island.",
        "sunsetbeach.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105976.97778701782!2d-78.60060942651556!3d33.895305066380345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890082b0f127f05b%3A0xd1e58176f5ff4a78!2sSunset%20Beach%2C%20NC!5e1!3m2!1sen!2sus!4v1791134695907!5m2!1sen!2sus"
    ),
    new Vacation(
        "Edisto Beach", "Beach",
        "A small, laid-back beach town in Colleton County, South Carolina, with no high-rises.",
        "Hunt for shells and fossils, visit Edisto Beach State Park, go crabbing in the tidal creeks.",
        "edistobeach.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107689.07863310992!2d-80.4035599771046!3d32.49184554981161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc3ae2a89e0b85%3A0xa0f4cdb4a15e1fae!2sEdisto%20Beach%2C%20SC!5e1!3m2!1sen!2sus!4v1791134704131!5m2!1sen!2sus"
    ),
    new Vacation(
        "Oak Island", "Beach",
        "A beach town separated from the mainland by the Intracoastal Waterway, lined with Atlantic beaches.",
        "Fish off the Ocean Crest Pier, walk the Oak Island Nature Center trails, visit the Oak Island Lighthouse.",
        "oakisland.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423631.9849225186!2d-78.47283231174481!3d33.95077491620986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900a081b16e4cb3%3A0xb94fac3c2cceea73!2sOak%20Island%2C%20NC!5e1!3m2!1sen!2sus!4v1791134712813!5m2!1sen!2sus"
    ),
    new Vacation(
        "Pawleys Island", "Beach",
        "A barrier island town known for its beaches, sand dunes, and 18th-century historic houses.",
        "Explore Brookgreen Gardens, tour Atalaya at Huntington Beach State Park, relax on the dunes.",
        "pawleysisland.jpg",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53279.87819584083!2d-79.16527170082004!3d33.4234428279381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900310270ac82d3%3A0xb93d3315efe428d2!2sPawleys%20Island%2C%20SC!5e1!3m2!1sen!2sus!4v1791134719939!5m2!1sen!2sus"
    )
];

//Setup

//Adds the cards to page
const showVacations = () => {
    const gallery = document.getElementById("vacation-gallery");
    vacations.forEach((vacation) => gallery.append(vacation.getCard()));
};

const setupModal = () => {
    const modal = document.getElementById("vacation-modal");
    document.getElementById("close-modal").onclick = closeModal;

    //Closes modal
    modal.onclick = (event) => {
        if (event.target === modal) closeModal();
    };
};

window.onload = () => {
    showVacations();
    setupModal();
};