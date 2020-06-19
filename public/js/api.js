const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
      console.log(res);
      // return res
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log(json[0].exercises);
    return json;
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log(data)
    const res = await fetch("/api/workouts/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
