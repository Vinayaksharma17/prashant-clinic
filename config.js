// Configuration file for Prashant Clinic website
// Replace nruronixtech/prashant-clinic-assets/images with your actual ImageKit.io ID

const CONFIG = {
  // ImageKit.io Configuration
  imagekit: {
    urlEndpoint: 'https://ik.imagekit.io/nruronixtech/prashant-clinic-assets/images',
    // Add your public key here if you need upload functionality
    // publicKey: 'your_public_key_optional'
  },

  // Contact Information
  contact: {
    phone: '8310091561',
    phoneFormatted: '+91 8310091561',
    whatsappNumber: '918310091561',
    email: 'jd132prashant@gmail.com',
    instagram: 'prashant_clinic_jalanagar'
  },

  // Business Information
  clinic: {
    name: 'Prashant Clinic',
    tagline: 'First Stop for your Surgical Problems',
    address: {
      line1: 'Beside Buddha Vihar, Sai Baba Temple Road',
      line2: 'Jalanagar, Vijayapur - 586109',
      mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.3478969289345!2d75.7177071749338!3d16.80908858398277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc655878099eb45%3A0x126daa05a01c349c!2sPrashant%20Clinic!5e0!3m2!1sen!2sin!4v1769708625552!5m2!1sen!2sin'
    }
  },

  // Doctor Information
  doctor: {
    name: 'Dr. Prashant Yadahalli',
    qualifications: 'MBBS, DNB (General Surgery), FMAS, FIAGES',
    specialization: 'Consultant Laparoscopic, General & Trauma Surgeon'
  },

  // Website URL (Update before deployment)
  website: {
    url: 'https://yourwebsite.com',
    domain: 'yourwebsite.com'
  }
};

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
