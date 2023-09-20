export function LocalClear() {
    return(
        <button className="submit" onClick={() => localStorage.clear()}>
            Очистить LocalStorage
        </button> 
    )
}