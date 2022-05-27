let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000)
})

promise.then(
    (res) => console.log(res)
).catch((err) => console.log(err))

// test git rebase 1