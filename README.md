# Discord Clone

This project is a Discord clone developed using Next.js, React.js, and TypeScript. It features real-time messaging, file attachments, member management, voice and video calls, server creation, and customization, among other functionalities.

![MasterHead](https://github.com/KAVIRAJec/Discord-clone/blob/main/Output%20Images/Main%20page.png)

## Technologies Used

- Frontend: Next.js, React.js, TypeScript
- UI Libraries: ShadCN UI, Tailwind CSS
- Login Authentication: Clerk Authentication
- Image/PDF Upload: Uploadthing
- ORM: Prisma (with support for MySQL, PostgreSQL, etc.)
- Database: MySQL (using Aiven Cloud)
- Web Deployment: Railway
- Real-time Messaging: Socket.io
- Audio/Video Calls: Livekit

## Key Features

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & edit messages in real-time for all users
- Create text, audio, and video call channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest/Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (@tanstack/query)
- Server creation and customization
- Beautiful UI using Tailwind CSS and ShadcnUI
- Full responsivity and mobile UI
- Light/Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Aiven Cloud
- Authentication with Clerk

## Project Details

- Operating System: Ubuntu (Linux)
- Cloud Platform: Initially developed using Microsoft Azure Cloud, then moved the deployment to the Aiven MySQL server.
- Duration: 2 - 3 months
- Contribution: Individual (100%)

## Demo Image

Navigate to ```Output Images ``` to view the webpage images

## Deployed Website Link

https://discord-clone-production-2131.up.railway.app

## Learning Experience

This project provided me with valuable knowledge on developing higher-level applications and understanding their workings. I gained expertise in style and UI development and mastered Git and GitHub commits for version control.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/KAVIRAJec/Discord-clone.git
   ```
2. Navigate to the project directory and install dependencies:

    ```bash
    cd Discord-clone
    npm install
    ```

3. Update the environment variables with your credentials.

4. Start the development server:

    ```bash
    npm run dev
    ```
5. Open http://localhost:3000 with your browser to see the result.

Feel free to explore the project and contribute to its development!


## MIT License