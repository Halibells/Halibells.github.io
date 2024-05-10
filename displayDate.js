function displayDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${months[today.getMonth()]} ${day}, ${year}`;
    document.getElementById('current-date').innerHTML = currentDate;
}