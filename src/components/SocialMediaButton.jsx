import { motion } from "motion/react"

const SocialMediaButton = () => {
  const scrollToSocials = () => {
    document.getElementById('socials')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToSocials}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
        </svg>
        My Social Media
      </p>
    </motion.button>
  )
}

export default SocialMediaButton