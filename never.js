//never and it's use case is really interesting...
function getError(massage, code) {
    throw { massage: massage, errorcode: code };
}
var result = getError("we got some error ", 500);
console.log(result);
