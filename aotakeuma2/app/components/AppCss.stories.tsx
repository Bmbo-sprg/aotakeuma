import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "AppCss",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <main className="space-y-6 p-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold">フォント</h1>
        <p className="text-base">
          M PLUS 2 を基本的に使ってます。絵文字もあるよ 🆗
        </p>
        <p className="text-sm text-slate-600">ちっちゃい文字</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">色</h2>
        <div className="flex gap-3">
          <div className="h-10 w-24 rounded bg-primary" />
          <div className="h-10 w-24 rounded bg-primary-50" />
          <div className="h-10 w-24 rounded bg-primary-950" />
          <div className="h-10 w-24 rounded bg-secondary" />
        </div>
        <p>
          <span className="text-primary font-bold">Lemonade</span>
          <span className="text-base font-bold"> / </span>
          <span className="text-secondary font-bold">Palette</span>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">リンク</h2>
        <a href="#">リンクだよ</a>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">コンポーネント</h2>
        <div className="glass-panel p-4">.glass-panel</div>
        <div className="interactive-card p-4">
          .interactive-card (hover to lift)
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">アニメーション</h2>
        <div className="animate-subtle-in p-4">animate-subtle-in</div>
      </section>
    </main>
  ),
};
