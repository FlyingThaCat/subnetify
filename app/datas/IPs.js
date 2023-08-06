// Desc: generate random valid IP address

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomIp = () => {
    // Generate a valid first octet for the IP address (1-126 for Class A, 128-191 for Class B, 192-223 for Class C)
    const firstOctet = getRandomNumber(1, 223);
    if (firstOctet === 127) {
      // Avoid using 127.x.x.x (loopback addresses)
      return randomIp();
    }
  
    // Generate the rest of the IP address
    const ipParts = Array.from({ length: 3 }, () => getRandomNumber(0, 255));
    const ipAddress = `${firstOctet}.${ipParts.join('.')}`;
  
    return ipAddress;
};

const getRandomCidr = (ip) => {
    const ipParts = ip.split('.');
    const firstOctet = parseInt(ipParts[0]);

    if (firstOctet >= 1 && firstOctet <= 126) {
        return getRandomNumber(8, 30);
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        return getRandomNumber(16, 30);
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        return getRandomNumber(24, 30);
    }

    return cidr;
}

module.exports = {randomIp, getRandomCidr};