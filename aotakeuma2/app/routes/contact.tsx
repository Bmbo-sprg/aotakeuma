import type { Route } from "./+types/contact";
import { CopyField } from "../components/CopyField/CopyField";

export function meta(_: Route.MetaArgs) {
  return [{ title: "お問い合わせ - 竹馬あお" }];
}

export default function ContactRoute(_: Route.ComponentProps) {
  return (
    <main className="space-y-8 p-6 pb-20 lg:max-w-4xl lg:mx-auto">
      <h1 className="text-2xl font-semibold text-slate-900">お問い合わせ</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          楽曲制作のご依頼について
        </h2>
        <p className="text-sm text-slate-700">
          納期は、基本的に 1〜3
          ヶ月程度いただきたいです。お急ぎの場合はご相談ください。
          <br />
          本業との兼ね合いもあるため、時期によってはお引き受けできないこともあります。ご了承ください。
        </p>
        <p className="text-sm text-slate-700">
          料金は、基本的に 5,000〜15,000 円程度を想定しております。
          <br />
          ご依頼者様の予算や要望に応じて柔軟に対応したいため、まずはお気軽にご相談ください。
        </p>
        <p className="text-sm text-slate-700">
          様々なジャンルやサウンドに興味があります！
          <br />
          ご依頼前に、私の過去作品をご確認いただけると幸いです。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          DJ 等のオファーについて
        </h2>
        <p className="text-sm text-slate-700">
          日程とバイブスが合えば、喜んでお引き受けします！
        </p>
        <p className="text-sm text-slate-700">
          出演料はいただきません。
          <br />
          関東圏以外のイベントの場合は、交通費をご支給いただけると助かります。
        </p>
        <p className="text-sm text-slate-700">
          様々なジャンルやサウンドに興味があります！
          <br />
          ご依頼前に、私の過去出演をご確認いただけると幸いです。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">連絡先</h2>
        <p className="text-sm text-slate-700">
          X の DM には仕様上気付けない可能性が高いです。
          <br />
          メールアドレス、Discord の
          DM、もしくは以下のフォームからご連絡いただけると助かります。
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <CopyField label="Email" value="b254cmu@gmail.com" />
          <CopyField label="Discord" value="bmbo_sprg" />
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfs74znUakDMRGDUeyTddJgOGw_WmQ_Z_w0vwBmok4MrlHbRw/viewform?embedded=true"
          width="100%"
          height="500"
        >
          読み込んでいます…
        </iframe>
      </section>
    </main>
  );
}
