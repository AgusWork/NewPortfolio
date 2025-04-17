import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: false,
      },
};
 
export default withNextIntl(nextConfig);