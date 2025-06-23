/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/boot/:path*',
                // destination: 'http://localhost:8055/:path*'
                // destination: 'http://host.docker.internal:8055/:path*',
                destination: "http://backend:8080/:path*",
                // 도커 내부에서는 localhost가 react컨테이너 자신을 의미

            },
        ];
    }
};

export default nextConfig;
