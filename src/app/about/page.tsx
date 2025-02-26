export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Capabilities</h1>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-2xl font-semibold">🔹 Fundamentals</p>
          <ul className="pl-5">
            <li>Semantic HTML5 structure</li>
            <li>Advanced CSS techniques (Flex, Grid, Animations)</li>
            <li>
              JavaScript (ES6+) concepts(Arrow functions, Promises, async/await)
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold">🔹 Libraries & Frameworks</p>
          <ul className="pl-5">
            <li>React.js - Component-based architecture</li>
            <li>Next.js - SSR/SSG, API routes, middleware</li>
            <li>React Native(for mobile)</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold">🔹 Performance Optimization</p>
          <ul className="pl-5">
            <li>Code-splitting</li>
            <li>lazy loading (React.lazy(), Suspense)</li>
            <li>Debouncing & throttling (e.g., optimizing search inputs)</li>
            <li>Optimizing rendering & re-renders in React</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold">🔹 SEO Optimization</p>
          <ul className="pl-5">
            <li>SSR (Server-side rendering)</li>
            <li>Pre-rendering (Static Site Generation)</li>
            <li>Optimizing meta tags</li>
            <li>Optimizing images</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold">🔹 Accessibility</p>
          <ul className="pl-5">
            <li>Screen readers</li>
            <li>Keyboard navigation</li>
            <li>Focus management</li>
            <li>Color contrast</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
