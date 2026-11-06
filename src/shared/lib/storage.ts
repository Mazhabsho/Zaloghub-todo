
export const loadFromStorage = <T>(
    key:string,
    fallback: T,
    isValid: (value: unknown) => value is T,
): T =>{

    try{
        const raw = localStorage.getItem(key);
        if(raw === null) return fallback;

        const parsed:  unknown = JSON.parse(raw);
        return isValid(parsed) ? parsed : fallback;
    }catch{
        return fallback;
    }
}


export const saveToStorage = <T>(
    key:string,
    value: T
): void =>{
 try{
    localStorage.setItem(key, JSON.stringify(value))
 }catch(e){
    console.warn('Storage may be full or unavailable', e);
 }
}