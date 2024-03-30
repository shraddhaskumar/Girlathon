const button = document.querySelector("button");

button.addEventListener("click", () => {
  const delayInDays = prompt("After how many days do you want to be notified?:");
  const delayInMilliseconds = delayInDays * 1000;
  setTimeout(() => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        const notify = new Notification("First Notification", {
          body: "Hello user",
          icon: "niyatiseva.png",
          tag: "hello",
        });
      } else {
        console.log("permission denied");
      }
    });
  }, delayInMilliseconds);
});