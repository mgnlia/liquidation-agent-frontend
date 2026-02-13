'use client';

import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ExternalLink,
  Github,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="border-b border-gray-200 bg-white/50 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              SolShield
            </h1>
          </div>
          <a
            href="https://github.com/mgnlia/devweek-2026-submission"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">Submission Repo</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-semibold">DeveloperWeek 2026 Submission</span>
          </div>

          <h2 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
            DeFi Risk Monitoring Inside Your IDE
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            SolShield integrates with Kilo Code via MCP to monitor Solana lending positions,
            analyze liquidation risk with Claude, and guide protective rebalancing.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/mgnlia/devweek-2026-submission#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl"
            >
              Quick Start
            </a>
            <a
              href="https://github.com/mgnlia/devweek-2026-submission/blob/main/SUBMISSION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 transition-colors hover:border-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400"
            >
              View Submission Package
            </a>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 text-4xl font-bold text-blue-600">3</div>
            <div className="text-gray-600 dark:text-gray-300">Solana lending protocols monitored</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 text-4xl font-bold text-green-600">6</div>
            <div className="text-gray-600 dark:text-gray-300">MCP tools exposed to Kilo Code</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 text-4xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Autonomous liquidation risk coverage</div>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="MCP-Native Monitoring"
            description="Query wallet health factors directly in Kilo Code with check_health_factor and list_positions tools."
            color="blue"
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8" />}
            title="Claude Risk Intelligence"
            description="get_position_risk provides context-aware analysis beyond static health factor thresholds."
            color="green"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Simulate Before Action"
            description="simulate_rebalance estimates impact and cost before any on-chain execution."
            color="yellow"
          />
          <FeatureCard
            icon={<AlertTriangle className="h-8 w-8" />}
            title="Proactive Alerts"
            description="Custom warning and critical thresholds surface danger early while developers stay in flow."
            color="red"
          />
          <FeatureCard
            icon={<ExternalLink className="h-8 w-8" />}
            title="Jupiter Integration"
            description="execute_rebalance routes swaps through Jupiter for optimized Solana execution paths."
            color="purple"
          />
          <FeatureCard
            icon={<Github className="h-8 w-8" />}
            title="Open Source"
            description="MIT licensed project with full DeveloperWeek submission docs and architecture."
            color="indigo"
          />
        </div>

        <div className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            How SolShield Works
          </h3>

          <div className="space-y-6">
            <Step
              number={1}
              title="Connect in Kilo"
              description="Add the SolShield MCP server to your Kilo config and run it locally via uv."
            />
            <Step
              number={2}
              title="Inspect Positions"
              description="Ask Kilo to check wallet health factors across Kamino, MarginFi, and Solend."
            />
            <Step
              number={3}
              title="Analyze and Simulate"
              description="Run AI risk analysis and rebalance simulation to validate protective strategy."
            />
            <Step
              number={4}
              title="Execute Safely"
              description="Trigger rebalance with explicit confirmation when risk exceeds your thresholds."
            />
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h3 className="mb-4 text-3xl font-bold">Built for DeveloperWeek 2026</h3>
          <p className="mb-8 text-xl opacity-90">
            SolShield demonstrates a practical MCP developer tool for DeFi safety workflows.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/mgnlia/devweek-2026-submission"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100"
            >
              View Code
            </a>
            <a
              href="https://github.com/mgnlia/devweek-2026-submission/blob/main/SUBMISSION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Review Submission Checklist
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">SolShield • DeveloperWeek 2026</p>
            <p className="text-sm">
              MCP • Kilo Code • Solana • Kamino • MarginFi • Solend • Jupiter • Claude
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    green: 'text-green-600 dark:text-green-400',
    red: 'text-red-600 dark:text-red-400',
    purple: 'text-purple-600 dark:text-purple-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} mb-4`}>{icon}</div>
      <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
