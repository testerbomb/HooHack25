function getCO2EmissionByType(type) {
  const filePath = "../data/car-emmison.json";
  try {
    const data = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/car-emmison.json`, "utf8")
    );
    const filteredCar = data.filter((car) => car.type === type);

    // Check if we have any cars of the given type
    if (filteredCar.length === 0) {
      console.log("No cars found for the given type.");
      return null;
    }

    // If you want to return only one car (e.g., the first match)
    const car = filteredCar[0]; // First matching car

    // Calculate the average emission for this particular car (which would be its own emission value)
    return car.average_co2_emission_g_per_mile;
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
    return null;
  }
}

function getCO2emissionByGallon(distance, milage) {
  return Math.floor((distance / milage) * 8887);
}
export { getCO2EmissionByType, getCO2emissionByGallon };
