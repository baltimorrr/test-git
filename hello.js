let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000)
})

promise.then(
    (res) => console.log(res)
).catch((err) => console.log(err))

// test git rebase 1
// test git rebase 2

// test pull 1
// test pull 2
// test pull 3
