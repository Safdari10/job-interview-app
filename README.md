
# AI Mock Interviewer

An AI-powered application that simulates professional job interviews. The app conducts interviews step-by-step, asking tailored questions based on user responses, and provides structured feedback at the end of the interview.

---

## Features

- Start a mock interview for any job title.
- Realistic interview simulation where the AI asks questions dynamically based on user responses.
- Structured feedback at the end of the interview, including strengths, areas for improvement, and overall impression.
- Fully responsive and user-friendly interface.

---

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: Google Gemini API (via `@google/generative-ai` package)
- **State Management**: React Hooks
- **Package Manager**: pnpm

---

## Installation

### Prerequisites

- Node.js (v16 or later)
- pnpm (preferred package manager)
- A Google Gemini API key

### Steps

1. **Create the Project**  
   This project was bootstrapped using the following command:  
   ```bash
   pnpm create-next-app@latest
   ```
   - Chose `TypeScript` for the project setup.

2. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd ai-mock-interviewer
   ```

3. **Install Dependencies**  
   Use `pnpm` to install project dependencies:  
   ```bash
   pnpm install
   ```

4. **Environment Variables**  
   Create a `.env.local` file in the root directory and add your Gemini API key:  
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

5. **Run the Development Server**  
   ```bash
   pnpm dev
   ```

6. **Build for Production**  
   To build and start the app in production mode:  
   ```bash
   pnpm build
   pnpm start
   ```

7. **Linting**  
   Run the linter to check for code quality:  
   ```bash
   pnpm lint
   ```

---

## Folder Structure

```plaintext
├── /app
│   ├── /api
│   │   └── generate.ts
│   ├── /components
│   │   ├── ConversationBox.tsx
│   │   ├── JobTitleInput.tsx
│   │   └── UserInputBox.tsx
│   └── page.tsx
├── /public
├── /styles
├── /utils
│   └── client.ts
├── .env.local
├── README.md
├── next.config.js
└── tsconfig.json
```

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.
