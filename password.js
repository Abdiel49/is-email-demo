function calculatePasswordStrength(password, config = {}) {
  // Define default configuration values
  const defaultConfig = {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true
  };

  // Merge provided configuration with default configuration
  const finalConfig = Object.assign({}, defaultConfig, config);

  // Extract values from final configuration
  const minLength = finalConfig.minLength;
  const requireUppercase = finalConfig.requireUppercase;
  const requireLowercase = finalConfig.requireLowercase;
  const requireNumbers = finalConfig.requireNumbers;
  const requireSymbols = finalConfig.requireSymbols;

  let securityPoints = 0;

  // Validate password length
  if (password.length >= minLength) {
    securityPoints++;
  }

  // Validate if it contains uppercase letters
  if (/[A-Z]/.test(password)) {
    securityPoints++;
  }

  // Validate if it contains lowercase letters
  if (/[a-z]/.test(password)) {
    securityPoints++;
  }

  // Validate if it contains numbers
  if (/[0-9]/.test(password)) {
    securityPoints++;
  }

  // Validate if it contains symbols
  if (/[^A-Za-z0-9]/.test(password)) {
    securityPoints++;
  }

  // Calculate security level
  let securityLevel;
  if (securityPoints <= 2) {
    securityLevel = "Very Weak";
  } else if (securityPoints === 3) {
    securityLevel = "Weak";
  } else if (securityPoints === 4) {
    securityLevel = "Moderate";
  } else {
    securityLevel = "Strong";
  }

  // Return result
  return securityLevel;
}

// Example of usage
const password = "password123";
const result = calculatePasswordStrength(password);
console.log(result);
