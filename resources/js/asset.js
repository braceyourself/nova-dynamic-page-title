function createTitle(route) {
    return route.replace("\/", "")
        .replace("resources/", "")
        .split("/")
        .map(_.startCase)
        .join(" > ")
}

Nova.booting((Vue, router, store) => {
    var originalTitle = document.title;
    router.beforeEach((to, from, next) => {

        document.title = createTitle(to.path) + " | " + originalTitle

        next()
    })
});
