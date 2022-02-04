
export const todaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
};

export const timeRightNow = () => {
    var today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    const ampm = today.getHours() >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours: 12; //changes 0 hour to 12am
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var time = hours + ":" + minutes + ampm;
    return time;
}