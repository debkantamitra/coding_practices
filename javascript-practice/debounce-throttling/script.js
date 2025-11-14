// TODO: Implement trailing and leading both true case
function debounce(fn, delay, trailing, leading) {
    let timeout;
    
    if(leading) {
        return function(...args) {
            const context = this
            
            if(timeout) {
                 return
            } else {
                fn.apply(context, args);
                timeout = setTimeout(() => {
                    timeout = null
                }, delay)   
            }
        }
    } else {
        return function(...args) {
            const context = this
            
            if(timeout) {
                clearTimeout(timeout);
            }
            
            timeout = setTimeout(() => {
                fn.apply(context, args);
            }, delay)
        }
    }
    
}