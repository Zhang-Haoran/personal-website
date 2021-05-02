function timeFormatter(UNIX_timestamp) {
    const currentTime = new Date(UNIX_timestamp);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    const year = currentTime.getFullYear();
    const month = months[currentTime.getMonth()];
    const date = currentTime.getDate();
    const hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    return `${date} ${month} ${year} ${hour}:${min}`;
}
module.exports = {timeFormatter};