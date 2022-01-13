/** 
 * Template literal tag for HTML strings. Will return a Promise.
 * 
 * @param {string[]} strings
 * @param parts
 * @returns {Promise<string>}
 */
export async function html([...strings], ...parts) {
    let output = strings.shift();
    const partStrings = await Promise.all(
        parts.map(renderPart)
    );
    
    for (const part of partStrings) {
        output += part + strings.shift();
    }
    
    return output;
}

function renderPart(part) {
    if (part === null || typeof part == 'undefined') {
        return '';
    }
    
    if (typeof part == 'function') {
        return renderPart(part());
    }
    
    if (Array.isArray(part)) {
        return Promise.all(part).then(
            subparts => subparts.map(renderPart).join('\n')
        );
    }
    
    if (typeof part?.then == 'function') {
        return part.then(renderPart);
    }
    
    if (typeof part == 'string') {
        return part;
    }
    
    return JSON.stringify(part);
}