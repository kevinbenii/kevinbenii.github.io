const carColors = ["#2ecfa3", "#9ad34a", "#6a6bc9", "#f08a6c", "#c58ad6", "#1f1147", "#c7f0ff"];

//Builds a car from divs and puts it on the road
const createCar = (color, x, y) => {
  const road = document.getElementById("road");

  const car = document.createElement("div");
  car.classList.add("car");
  car.style.left = x + "%";
  car.style.top = y + "px";

  const roof = document.createElement("div");
  roof.classList.add("car-roof");
  car.append(roof);

  const body = document.createElement("div");
  body.classList.add("car-body");
  body.style.background = color;
  car.append(body);

  const backWheel = document.createElement("div");
  backWheel.classList.add("wheel");
  backWheel.classList.add("back");
  car.append(backWheel);

  const frontWheel = document.createElement("div");
  frontWheel.classList.add("wheel");
  frontWheel.classList.add("front");
  car.append(frontWheel);

  road.append(car);
};

const loadCars = (numberOfCars) => {
  const laneXPositions = [[], []]; //Top lane, bottom lane

  for (let i = 0; i < numberOfCars; i++) {
    const color = carColors[Math.floor(Math.random() * carColors.length)];
    const lane = Math.random() < 0.5 ? 0 : 1;
    const y = lane === 0 ? Math.floor(Math.random() * 27) + 5 : Math.floor(Math.random() * 27) + 91;

    let x;
    let tries = 0;

    //Re-roll x if it's too close to a car already in this lane
    do {
      x = Math.floor(Math.random() * 85);
      tries++;
    } while (laneXPositions[lane].some((usedX) => Math.abs(usedX - x) < 12) && tries < 10);

    laneXPositions[lane].push(x);
    createCar(color, x, y);
  }
};

loadCars(10);