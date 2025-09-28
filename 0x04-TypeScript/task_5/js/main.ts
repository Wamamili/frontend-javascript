// Define MajorCredits interface
export interface MajorCredits {
    credits: number;
    // Brand property to enforce nominal typing
    _brand: 'major';
}

// Define MinorCredits interface
export interface MinorCredits {
    credits: number;
    // Brand property to enforce nominal typing
    _brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'major',
    };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'minor',
    };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };

const minor1: MinorCredits = { credits: 2, _brand: 'minor' };
const minor2: MinorCredits = { credits: 1, _brand: 'minor' };

console.log('Major Credits Sum:', sumMajorCredits(major1, major2));
console.log('Minor Credits Sum:', sumMinorCredits(minor1, minor2));
