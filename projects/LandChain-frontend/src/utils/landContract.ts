// Simple utility untuk contract calls (bisa dibuat nanti)
export const landContract = {
    async registerTanah(tanahId: string, pemilik: string, luas: string, lokasi: string) {
        // Ganti dengan real contract call
        return `Tanah berhasil didaftarkan: ${tanahId}`;
    },

    async buatSertifikat(nomorSertifikat: string) {
        // Ganti dengan real contract call  
        return `Sertifikat berhasil dibuat: ${nomorSertifikat}`;
    },

    // ... method lainnya
};