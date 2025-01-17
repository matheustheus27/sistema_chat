function validation(data, rules) {
    const errors = [];

    for(const [field, rule] of Object.entries(rules)) {
        const fieldValue = data[field];

        if(rule.includes('required') && (fieldValue === undefined || fieldValue === null || fieldValue === '')) {
            errors.push(`The field ${field} is required.`)
        }

        if (rule.includes('string') && typeof fieldValue !== 'string') {
            errors.push(`The field ${field} must be a string.`);
        }

        if(rule.includes('numeric') && typeof fieldValue !== 'number') {
            errors.push(`The field ${field} must be a number`);
        }

        if (rule.includes('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
            errors.push(`The field ${field} must be a valid email.`);
        }

        if (rule.startsWith('min:') && typeof fieldValue === 'string') {
            const minLength = parseInt(rule.split(':')[1], 10);
            if (fieldValue.length < minLength) {
                errors.push(`The field ${field} must have at least ${minLength} characters.`);
            }
        }

        if (rule.startsWith('max:') && typeof fieldValue === 'string') {
            const maxLength = parseInt(rule.split(':')[1], 10);
            if (fieldValue.length > maxLength) {
                errors.push(`The field ${field} must have no more than ${maxLength} characters.`);
            }
        }

        if (rule.startsWith('min:') && typeof fieldValue === 'number') {
            const minValue = parseInt(rule.split(':')[1], 10);
            if (fieldValue < minValue) {
                errors.push(`The field ${field} must be at least ${minValue}.`);
            }
        }

        if (rule.startsWith('max:') && typeof fieldValue === 'number') {
            const maxValue = parseInt(rule.split(':')[1], 10);
            if (fieldValue > maxValue) {
                errors.push(`The field ${field} must be no more than ${maxValue}.`);
            }
        }
    }

    if(errors.length > 0) {
        return {
            status: false,
            message: 'Failure to validate!',
            errors: errors
        };
    } else {
        return {
            status: true,
            message: 'Successfully validated!',
            errors: []
        };
    }
}

module.exports = {validation}