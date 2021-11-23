/**
 * @param {int} radius
 * @return {int}
 */
module.exports.circleArea = function(radius) {
    let result = Math.PI * radius *radius;
    console.log(result);
    return result;
}
/**
 * @param {int} radius
 * @return {int}
 */
module.exports.circleCircumference = function(radius) {
    let result = 2*Math.PI * radius ;
    console.log(result);
    return result;
}
