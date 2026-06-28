import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-charcoal text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1260px] mx-auto flex flex-col justify-between h-full">
        
        {/* Fila Superior: Identidad + Enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca, Redes y Texto Local */}
          <div>
            {/* Logo más grande y legible */}
            <div className="relative w-[280px] h-[65px] mb-4">
              <Image 
                src="assets/images/logo-chileflyfishing-white.svg" 
                alt="Chile Fly Fishing"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="font-sans text-white/50 text-sm mb-6">
              Coyhaique, Chilean Patagonia
            </p>
            
            {/* Íconos de Redes Sociales (Estructura SVG nativa para asegurar visualización) */}
            <div className="flex items-center space-x-5 text-white/60">
              <Link href="https://www.instagram.com/chileflyfishing/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" title="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
              <Link href="https://www.tiktok.com/@chileflyfishing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" title="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.61-.67-.02 3.22-.01 6.44-.02 9.65-.07 2.44-1.23 4.83-3.33 6.09-2.05 1.26-4.76 1.44-6.95.48-2.47-1.05-4.13-3.67-4.01-6.41.1-2.92 2.28-5.54 5.17-5.98.41-.07.83-.09 1.24-.07v4.14c-.62-.05-1.25.07-1.8.38-.85.45-1.39 1.39-1.38 2.36.01 1.32 1.11 2.43 2.43 2.42 1.48.01 2.53-1.26 2.43-2.67-.02-3.83-.01-7.67-.01-11.51z"/></svg>
              </Link>
              <Link href="https://www.facebook.com/chileflyfishingcl" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" title="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </Link>
              <Link href="https://www.youtube.com/@chile_flyfishing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" title="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="https://wa.me/56956570365/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" title="WhatsApp">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-3.56c1.616.96 3.2 1.48 4.82 1.481 5.4 0 9.794-4.386 9.797-9.782.002-2.613-1.01-5.067-2.853-6.91C16.51 3.385 14.062 2.37 11.455 2.37c-5.4 0-9.792 4.387-9.796 9.785-.001 1.745.459 3.447 1.332 4.954l-1.02 3.725 3.824-1.002zM16.597 13.62c-.26-.13-1.543-.76-1.783-.85-.24-.08-.415-.13-.59.13-.175.26-.68.85-.833 1.025-.153.175-.305.2-.565.07-.26-.13-1.1-.407-2.095-1.294-.775-.69-1.3-1.544-1.452-1.804-.153-.26-.016-.4.113-.53.117-.117.26-.305.39-.455.13-.153.175-.26.26-.435.08-.175.04-.33-.02-.46-.06-.13-.59-1.42-.81-1.94-.213-.51-.45-.44-.618-.45-.16-.01-.344-.01-.528-.01-.184 0-.485.07-.74.355-.254.283-.97.947-.97 2.31 0 1.365.993 2.686 1.134 2.875.14.188 1.954 2.984 4.735 4.182.662.285 1.178.455 1.58.583.665.21 1.27.18 1.748.11.534-.08 1.543-.63 1.762-1.24.22-.61.22-1.13.153-1.24-.067-.11-.247-.175-.507-.305z"/></svg>
              </Link>
            </div>
          </div>

          {/* Columna 2: Company */}
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-5">
              Company
            </span>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/patagonia-fly-fishing-faq" className="hover:text-white transition-colors">
                  Patagonia Fly Fishing Faq
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Fishing Trips */}
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-5">
              Fishing Trips
            </span>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li>
                <Link href="/fishing-season" className="hover:text-white transition-colors">
                  Fishing Season
                </Link>
              </li>
              <li>
                <Link href="/patagonia-fly-fishing" className="hover:text-white transition-colors">
                  Fishing Program
                </Link>
              </li>
              <li>
                <Link href="/beyond-patagonia" className="hover:text-white transition-colors">
                Beyond Patagonia
              </Link>
              </li>
              <li>
                <Link href="/patagonia-fly-fishing-blog" className="hover:text-white transition-colors">
                Fly Fishing Blog
              </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Remote Patagonia Fly Fishing Text */}
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-5">
              Remote Patagonia Fly Fishing
            </span>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Exclusive expeditions crafted for the discerning angler. Experience the wild beauty of Chilean Patagonia through our tailor-made fly fishing programs in the heart of Coyhaique and the most remote waters of the Aysén region.
            </p>
          </div>

        </div>

        {/* Fila Inferior Corregida Quirúrgicamente */}
        <div className="pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/40 font-sans">
          {/* Columna Izquierda */}
          <p className="leading-relaxed">
            Enjoy a unique fly fishing experience in Coyhaique, Chilean Patagonia. Live a legendary experience in the heart of wild Patagonia
          </p>
          
          {/* Columna Derecha: Copyright + Enlaces en una sola línea limpia */}
          <div className="flex flex-col md:items-end gap-2">
            <p>Copyright © 2026. All rights reserved.</p>
            
          </div>
        </div>

      </div>
    </footer>
  );
}