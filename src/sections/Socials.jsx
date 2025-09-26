const Socials = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:Hishirusai@gmail.com',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Hishirusai@gmail.com'
    },
    {
      name: 'Phone',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      url: 'tel:+1234567890',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: '+1 (234) 567-8900'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Connect with me on Facebook'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.987 11.987 6.621 0 11.987-5.366 11.987-11.987C24.014 5.367 18.648.001 12.017.001zM8.453 18.306c-2.14 0-3.874-1.735-3.874-3.874 0-2.14 1.734-3.874 3.874-3.874 2.14 0 3.874 1.734 3.874 3.874 0 2.139-1.734 3.874-3.874 3.874zm7.133-9.722c0 .698-.225 1.378-.644 1.939-.419.56-1.014.994-1.694 1.235-.681.24-1.425.275-2.123.099-.698-.177-1.338-.548-1.825-1.058-.488-.511-.834-1.162-.988-1.857-.154-.695-.104-1.434.142-2.107.246-.673.677-1.258 1.229-1.668.552-.41 1.202-.631 1.854-.631 2.14 0 3.874 1.734 3.874 3.874H15.58z"/>
        </svg>
      ),
      url: 'https://instagram.com',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Follow my art on Instagram'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.218-1.726-1.218-2.338v-.364C16.523.792 15.731 0 14.923 0h-3.077c-.808 0-1.6.792-1.6 1.6v8.154c0 1.662-1.354 3.015-3.015 3.015S4.215 11.416 4.215 9.754c0-1.661 1.354-3.015 3.015-3.015.554 0 1.108.154 1.6.446V4.108c-.492-.154-1.015-.23-1.6-.23C3.323 3.877 0 7.2 0 11.108s3.323 7.23 7.23 7.23 7.231-3.323 7.231-7.23V8.277c1.046.615 2.261.969 3.539.969v-3.077c-.831 0-1.6-.307-2.185-.892-.369-.369-.6-.831-.677-1.338-.077-.508 0-1.015.154-1.492.077-.246.154-.492.23-.715z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@yourusername',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Follow me on TikTok'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com',
      color: 'from-[#3A3A3A] via-[#242424] to-[#3A3A3A]',
      description: 'Follow me on Twitter'
    }
  ]

  return (
    <section id="socials" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl -z-10"></div>
      <div className="text-center mb-16">
        <h2 className="[font-family:nebulax] Biggesthead text-center">SOCIAL MEDIA</h2>
        <p className="subtext max-w-2xl mx-auto mt-6">
          Connect with me across different platforms to see my latest work,
          behind-the-scenes content, and stay updated with my creative journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${social.color} hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl min-h-[200px]`}
          >
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold [font-family:nebulax] mb-3">
                {social.name}
              </h3>
              
              {/* Show email/phone directly or description */}
              {(social.name === 'Email' || social.name === 'Phone') ? (
                <p className="text-white/90 mb-6 [font-family:montlight] text-lg font-medium">
                  {social.name === 'Email' ? 'Hishirusai@gmail.com' : '+1 (234) 567-8900'}
                </p>
              ) : (
                <p className="text-white/90 mb-6 [font-family:montlight]">
                  {social.description}
                </p>
              )}
              
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <span>Follow me</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Socials