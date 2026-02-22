# Prashant Clinic Website# Prashant Clinic Website

🏥 **A modern, responsive website for Prashant Clinic, Vijayapur**🏥 **A modern, responsive website for Prashant Clinic, Vijayapur**

Expert Laparoscopic, General & Trauma Surgery care by Dr. Prashant YadahalliExpert Laparoscopic, General & Trauma Surgery care by Dr. Prashant Yadahalli

---

## 🚀 Quick Start## 🚀 Quick Start

### 1. ImageKit.io Configuration### 1. Setup ImageKit.io (Image CDN)

Already configured with:Already configured with:

- **ImageKit ID**: `nruronixtech`- ImageKit ID: `nruronixtech`

- **Asset Path**: `prashant-clinic-assets/images`- Path: `prashant-clinic-assets/images`

- **Full URL**: `https://ik.imagekit.io/nruronixtech/prashant-clinic-assets/images/`

### 2. Test Locally

### 2. Test Locally

````bash

```bash# Start local server

# Start local development serverpython3 -m http.server 8000

python3 -m http.server 8000

# Visit http://localhost:8000

# Open in browser```

# Visit: http://localhost:8000

```### 3. Deploy



### 3. Deploy to Production**Easy deployment options:**

- **Netlify**: Drag & drop folder → Done! ✅

**Recommended hosting platforms:**- **Vercel**: Import project → Done! ✅

- **Netlify**: Drag & drop the entire folder → Deployed! ✅- **GitHub Pages**: Push to GitHub → Enable Pages ✅

- **Vercel**: Import from GitHub → Auto-deployed! ✅

- **GitHub Pages**: Enable in repository settings ✅---

- **Traditional Hosting**: Upload via FTP/cPanel ✅

## 📁 Project Structure

---

````

## 📁 Project Structureprashant-clinic-final/

├── index.html # Main HTML file

````├── manifest.json                 # PWA manifest

prashant-clinic-final/├── robots.txt                    # SEO robots configuration

│├── sitemap.xml                   # SEO sitemap

├── index.html                    # Main HTML page├── .htaccess                     # Apache server configuration

├── manifest.json                 # PWA manifest├── .gitignore                    # Git ignore rules

├── robots.txt                    # SEO robots file├── replace-imagekit-id.sh        # ImageKit setup script

├── sitemap.xml                   # SEO sitemap│

├── .htaccess                     # Apache server config├── assets/                       # All static assets

├── .gitignore                    # Git ignore rules│   ├── css/

├── replace-imagekit-id.sh        # ImageKit setup utility│   │   └── style.css            # Main stylesheet

├── README.md                     # Documentation (this file)│   └── js/

││       ├── script.js            # Main JavaScript

├── assets/                       # Static assets directory│       └── config.js            # Configuration file

│   ├── css/│

│   │   └── style.css            # Main stylesheet├── docs/                         # Documentation (if created)

│   ││   ├── DEPLOYMENT_GUIDE.md

│   └── js/│   ├── IMAGEKIT_SETUP.md

│       ├── script.js            # Main JavaScript│   └── PRODUCTION_CHECKLIST.md

│       └── config.js            # Site configuration│

│├── images/                       # Original images (backup/local)

├── docs/                         # Documentation files (optional)│   └── g5.webp

│   ├── DEPLOYMENT_GUIDE.md      # Deployment instructions│

│   ├── IMAGEKIT_SETUP.md        # ImageKit setup guide└── README.md                     # This file

│   └── PRODUCTION_CHECKLIST.md  # Pre-launch checklist```

│

└── images/                       # Local images backup---

    └── g5.webp                  # Sample image

```## 🎯 Features



---✅ **Fully Responsive** - Works on all devices

✅ **SEO Optimized** - Meta tags, sitemap, robots.txt

## 🎯 Features✅ **Fast Loading** - ImageKit CDN, lazy loading

✅ **WhatsApp Integration** - Easy appointment booking

### Core Features✅ **Gallery Lightbox** - Beautiful image viewer

✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop  ✅ **Google Maps** - Embedded location

✅ **SEO Optimized** - Meta tags, Open Graph, sitemap, robots.txt  ✅ **Mobile Menu** - Touch-friendly navigation

✅ **Fast Loading** - ImageKit CDN with lazy loading  ✅ **Smooth Animations** - Scroll-triggered reveals

✅ **WhatsApp Integration** - Direct appointment booking via WhatsApp  ✅ **PWA Ready** - Can be installed on mobile

✅ **Interactive Gallery** - Lightbox image viewer

✅ **Google Maps Integration** - Embedded clinic location  ---

✅ **Mobile-First Navigation** - Touch-friendly hamburger menu

✅ **Smooth Scroll Animations** - Intersection Observer API  ## 📸 ImageKit.io Integration

✅ **PWA Ready** - Can be installed as an app

This website uses ImageKit.io for optimal image delivery:

### Technical Features

- Clean, semantic HTML5 markup**Configuration:**

- Modern CSS3 with custom properties- Base URL: `https://ik.imagekit.io/nruronixtech/`

- Vanilla JavaScript (zero dependencies)- Asset Path: `prashant-clinic-assets/images/`

- Cross-browser compatible

- Accessibility-friendly**Benefits:**

- GDPR compliant (no cookies)- 🚀 **60-80% smaller images** - Automatic compression

- 🌍 **CDN delivery** - Fast loading worldwide

---- 📱 **Responsive images** - Right size for each device

- 🎨 **Auto optimization** - WebP/AVIF formats

## 📸 ImageKit.io CDN Integration- 💰 **Free tier** - 20GB bandwidth/month



### Configuration**Images on ImageKit:**

```- Logo images (navbar, favicon, app icons)

Base URL: https://ik.imagekit.io/nruronixtech/- Doctor photo

Path: prashant-clinic-assets/images/- Gallery images (g1.jpeg - g6.jpeg)

```- Hero background image



### Benefits---

- 🚀 **60-80% smaller images** - Automatic compression & optimization

- 🌍 **Global CDN delivery** - Fast loading from nearest server## 🔧 Technology Stack

- 📱 **Responsive images** - Auto-sized for each device

- 🎨 **Modern formats** - WebP/AVIF auto-conversion- **HTML5** - Semantic markup

- 💰 **Free tier** - 20GB storage, 20GB bandwidth/month- **CSS3** - Modern styling with animations

- 🔄 **Real-time transformations** - Resize, crop, optimize on-the-fly- **Vanilla JavaScript** - No dependencies

- **ImageKit.io** - Image CDN & optimization

### Images Hosted on ImageKit- **Google Fonts** - Poppins font family

- **Logo & Branding**: `logo_navbar_50.png`, `logo_navbar_40.png`, `logo_square_256.png`- **Google Maps** - Location embed

- **Doctor Profile**: `doctor.jpeg`

- **Gallery**: `g1.jpeg`, `g2.jpeg`, `g3.jpeg`, `g4.jpeg`, `g5.jpeg`, `g6.jpeg`---

- **Hero Background**: `hero-bg.jpg`

## 📞 Contact Information

### Transformation Examples   - robots.txt

```   - sitemap.xml

Thumbnail: /tr:w-400,h-300,fo-auto/image.jpg   - config.js

Logo: /tr:w-50,h-50/logo.png

Hero: /tr:w-1920,h-1080,q-80/hero.jpg---

````

## 📱 Contact Information

---

- **Phone**: 8310091561

## 🔧 Technology Stack- **WhatsApp**: +91 8310091561

- **Email**: jd132prashant@gmail.com

| Category | Technology |- **Instagram**: prashant_clinic_jalanagar

|----------|-----------|- **Address**: Beside Buddha Vihar, Sai Baba Temple Road, Jalanagar, Vijayapur - 586109

| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |

| **Fonts** | Google Fonts (Poppins) |---

| **CDN** | ImageKit.io |

| **Maps** | Google Maps Embed API |## 📚 Documentation

| **Icons** | Unicode Emoji |

| **Server** | Apache/Nginx compatible |- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions

- **[IMAGEKIT_SETUP.md](IMAGEKIT_SETUP.md)** - ImageKit.io setup guide

---- **[PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)** - Pre-launch checklist

## 🎨 Design System---

### Color Palette## 🛠️ Technical Stack

````css

--primary: #0b3b5e;    /* Navy Blue - Main brand color */- **HTML5** - Semantic markup

--accent: #2fe3ff;     /* Cyan - Call-to-action highlights */- **CSS3** - Modern styling, animations

--bg: #f6f9fc;         /* Light Blue - Background */- **JavaScript** - Vanilla JS (no frameworks)

--text: #0b1220;       /* Dark - Body text */- **ImageKit.io** - Image CDN

--card: #ffffff;       /* White - Card backgrounds */- **Google Fonts** - Poppins font family

```- **Google Maps** - Location embed



### Typography---

- **Font Family**: Poppins (Google Fonts)

- **Weights Used**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)## 🎨 Design

- **Base Size**: 16px

- **Line Height**: 1.6 for body text- **Color Palette**:

  - Primary: `#0b3b5e` (Navy Blue)

### Breakpoints  - Accent: `#2fe3ff` (Cyan)

```css  - Background: `#f6f9fc` (Light Blue)

Mobile: < 768px  - Text: `#0b1220` (Dark)

Tablet: 768px - 1024px

Desktop: > 1024px- **Typography**:

```  - Font: Poppins (Google Fonts)

  - Weights: 300, 400, 500, 600, 700

---

---

## 📞 Clinic Contact Information

## 📊 Performance

- **Phone**: [8310091561](tel:8310091561)

- **WhatsApp**: [+91 8310091561](https://wa.me/918310091561)- ⚡ Load time: < 3 seconds

- **Email**: [jd132prashant@gmail.com](mailto:jd132prashant@gmail.com)- 📱 Mobile-friendly: ✅

- **Instagram**: [@prashant_clinic_jalanagar](https://instagram.com/prashant_clinic_jalanagar)- ♿ Accessibility: Good

- **Address**: Beside Buddha Vihar, Sai Baba Temple Road, Jalanagar, Vijayapur - 586109, Karnataka, India- 🔍 SEO Score: Optimized

- 🖼️ Image optimization: ImageKit CDN

---

---

## 📊 Performance Metrics

## 🔐 Security

| Metric | Target | Status |

|--------|--------|--------|- ✅ HTTPS ready (enable in .htaccess)

| Load Time | < 3s | ✅ Achieved |- ✅ Security headers configured

| Mobile Friendly | 100% | ✅ Yes |- ✅ XSS protection enabled

| SEO Score | 90+ | ✅ Optimized |- ✅ No sensitive data stored

| Accessibility | WCAG 2.1 | ✅ Good |- ✅ WhatsApp integration (secure)

| Image Optimization | CDN | ✅ ImageKit |

| Browser Support | Modern | ✅ All |---



---## 📈 SEO Features



## 🔐 Security Features- Meta descriptions

- Open Graph tags (Facebook, WhatsApp)

- ✅ HTTPS ready (configure SSL certificate)- Structured data ready

- ✅ Security headers in `.htaccess`- Sitemap.xml

- ✅ XSS protection enabled- Robots.txt

- ✅ Content Security Policy ready- Semantic HTML

- ✅ No sensitive data storage- Alt text on images

- ✅ Form data sent via WhatsApp (no database)- Mobile-friendly

- ✅ GDPR compliant (no cookies/tracking)

---

---

## 🚀 Deployment Options

## 📈 SEO Optimization

### Netlify (Recommended - FREE)

### Implemented

- ✅ Semantic HTML5 structure```bash

- ✅ Meta descriptions and keywords# 1. Visit netlify.com

- ✅ Open Graph tags for social sharing# 2. Drag & drop project folder

- ✅ Twitter Card meta tags# 3. Done! 🎉

- ✅ Structured data markup ready```

- ✅ XML sitemap (`sitemap.xml`)

- ✅ Robots.txt configuration### Vercel (FREE)

- ✅ Alt text on all images

- ✅ Responsive meta viewport```bash

- ✅ Fast loading (< 3s)# 1. Visit vercel.com

- ✅ Mobile-first design# 2. Import project

# 3. Deploy

### To Do After Deployment```

- [ ] Submit sitemap to Google Search Console

- [ ] Verify website in Bing Webmaster Tools### GitHub Pages (FREE)

- [ ] Set up Google My Business listing

- [ ] Add Schema.org structured data```bash

- [ ] Monitor Core Web Vitalsgit init

git add .

---git commit -m "Initial commit"

git branch -M main

## 🚀 Deployment Guidegit remote add origin YOUR_REPO_URL

git push -u origin main

### Option 1: Netlify (Easiest - FREE)# Enable Pages in repo settings

```bash```

1. Go to netlify.com

2. Drag and drop the project folder### Traditional Hosting

3. Done! Your site is live

```- Upload via FTP/cPanel

- Ensure .htaccess is uploaded

### Option 2: Vercel (FREE)- Enable SSL certificate

```bash

1. Go to vercel.com---

2. Import from GitHub or upload

3. Auto-deployed with custom domain support## ✅ Pre-Launch Checklist

````

- [ ] Replace YOUR_IMAGEKIT_ID everywhere

### Option 3: GitHub Pages (FREE)- [ ] Upload all images to ImageKit

```bash- [ ] Test all images load

# Initialize git and push to GitHub- [ ] Test appointment form

git init- [ ] Test on mobile devices

git add .- [ ] Update website URLs

git commit -m "Initial commit"- [ ] Enable HTTPS

git branch -M main- [ ] Submit to Google Search Console

git remote add origin YOUR_REPO_URL

git push -u origin mainSee [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md) for complete checklist.



# Enable GitHub Pages in repository settings---

```

## 🐛 Troubleshooting

### Option 4: Traditional Hosting (cPanel/FTP)

````bash**Images not loading?**

1. Upload all files via FTP or cPanel File Manager

2. Ensure .htaccess is uploaded- Check ImageKit ID is correct

3. Set file permissions (644 for files, 755 for folders)- Verify images uploaded to ImageKit

4. Install SSL certificate (Let's Encrypt free)- Clear browser cache

5. Update DNS settings if using custom domain

```**WhatsApp not working?**



---- Test on mobile device

- Check phone number format: 918310091561

## 🛠️ Maintenance

**Website not loading?**

### Regular Tasks

- **Weekly**: Check website uptime and performance- Check hosting is active

- **Monthly**: Review ImageKit bandwidth usage (stay within free tier)- Verify DNS settings

- **Quarterly**: Update content, add new photos, refresh testimonials- Check browser console for errors

- **Annually**: Review and update doctor profile, services, contact info

---

### Backup Strategy

1. Keep original images in `images/` folder as backup## 📞 Support

2. Store a local copy of all files

3. Backup to cloud storage (Google Drive, Dropbox)For deployment help, see documentation files or contact:

4. Version control with Git/GitHub

- **Technical Support**: Check hosting provider docs

---- **ImageKit Support**: support@imagekit.io

- **Website Design**: Neuronix Technologies, Vijayapur

## 🐛 Troubleshooting

---

### Images Not Loading

- Check ImageKit URL is correct## 📄 License

- Verify images are uploaded to ImageKit

- Clear browser cache (Ctrl+Shift+R)This website is proprietary and belongs to Prashant Clinic, Vijayapur.

- Check browser console for errors

---

### WhatsApp Not Working

- Verify phone number format: `918310091561`## 🎉 Credits

- Test on actual mobile device

- Check if WhatsApp is installed- **Design & Development**: Neuronix Technologies, Vijayapur

- **Client**: Prashant Clinic, Vijayapur

### Website Not Loading- **Doctor**: Dr. Prashant Yadahalli, DNB General Surgery

- Check hosting is active- **Image CDN**: ImageKit.io

- Verify DNS settings are correct- **Fonts**: Google Fonts (Poppins)

- Check .htaccess for errors- **Maps**: Google Maps

- Review server error logs

---

### Mobile Menu Not Working

- Check if JavaScript file is loading (`assets/js/script.js`)**Website Status**: ✅ Production Ready

- Verify no JavaScript errors in console

- Test on different browsers**Last Updated**: February 22, 2026



------



## 📄 File Descriptions## 🚀 Ready to Deploy!



| File | Purpose |Follow the guides in this order:

|------|---------|

| `index.html` | Main webpage with all sections |1. Read [IMAGEKIT_SETUP.md](IMAGEKIT_SETUP.md)

| `assets/css/style.css` | All styles and responsive design |2. Run `./replace-imagekit-id.sh YOUR_ID`

| `assets/js/script.js` | Navigation, lightbox, scroll animations |3. Follow [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

| `assets/js/config.js` | Site configuration constants |4. Use [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)

| `manifest.json` | PWA configuration for installable app |

| `.htaccess` | Apache server config (compression, caching, security) |**Good luck! 🎉**

| `robots.txt` | Search engine crawler instructions |
| `sitemap.xml` | SEO sitemap for search engines |
| `replace-imagekit-id.sh` | Utility script to update ImageKit ID |

---

## 📝 Version History

- **v1.0** (Feb 2026) - Initial production release
  - Responsive design
  - ImageKit CDN integration
  - WhatsApp appointment system
  - SEO optimization
  - PWA support

---

## 📄 License

This website is proprietary and belongs to **Prashant Clinic, Vijayapur**.

---

## 🎉 Credits

- **Client**: Prashant Clinic, Vijayapur
- **Doctor**: Dr. Prashant Yadahalli, MBBS, DNB (General Surgery)
- **Design & Development**: Neuronix Technologies, Vijayapur
- **Image CDN**: ImageKit.io
- **Fonts**: Google Fonts (Poppins)
- **Maps**: Google Maps Platform

---

## ✅ Production Status

**Status**: ✅ Ready for deployment
**Last Updated**: February 22, 2026
**Version**: 1.0.0

---

**Built with ❤️ for better healthcare accessibility in Vijayapur**
````
