let params = new URLSearchParams(window.location.search);
let id = params.get("id");
console.log(id);

const course = (id, arr) => {
    return arr.filter((c) => c.id == id)[0];
  };
  
  const course = course(id, courses);
  console.log(course);