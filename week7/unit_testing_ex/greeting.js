function greeting(name) {
  let hello = "Hello";
  let punct = "," + " ";

  function isUpperCase(str) {
    return str == str.toUpperCase() && str != str.toLowerCase();
  };

  if (Array.isArray(name)) {
    return hello + punct + name.join(", ");
  } else if (name == null) {
    return "Hello there!";
  } else if (isUpperCase(name)) {
    return hello.toUpperCase() + " " + name.toUpperCase() + "!";
  } else {
    return hello + punct + name;
  }
};