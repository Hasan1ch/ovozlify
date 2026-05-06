import type {Config} from 'tailwindcss'

export default{ 
    content: ['./pages/**/*.vue', './components/**/*.vue','./*.vue'],
    theme:{
    
        extend:{
            colors: {
               'dark-bg': '#1a1410',
               'brown-surface':'#2a1f18',
               'primary': '#f5ebd8',
               'secondary':'#b8a890',
               'accent-terracotta': '#d97757',
               'accent-sage': '#5e8c7c'
            },
             
            fontFamily:{
                'serif':['Lora','serif'],
                'sans':['Inter', 'sans']
            }
        }
    }
} satisfies Config