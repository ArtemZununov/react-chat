export default function titleInitials(title){

    try{
    return title
    .split(' ')
    .map(word => word[0])
    .map(chat => chat.toUpperCase())
    .slice(0,2)
    .join('');
    } catch (e){
        console.error(e);
        console.log('Uppppps')

    }
}