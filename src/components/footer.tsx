import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinktree,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-neutral-950 py-14 text-white"
      role="contentinfo"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        {/* Brand */}
        <h3 className="font-gambetta font-bold">Patrick</h3>
        <div className="space-y-2">
          <h3 className="font-general font-semibold">
            Personal Training & Nutrition Coaching
          </h3>
          <p className="font-gambetta text-sm leading-relaxed">
            Unlock your potential and redefine your limits with structured
            training and nutrition guidance tailored for you.
          </p>
          <div className="mt-4 flex justify-center gap-6 md:justify-normal">
            <a
              href="https://web.facebook.com/patrick.lyons.97594/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <IconBrandFacebook stroke={2} size={24} />
            </a>
            <a
              href="https://www.instagram.com/patricklyons/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <IconBrandInstagram stroke={2} size={24} />
            </a>
            <a
              href="https://www.youtube.com/patricklyonsofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <IconBrandYoutube stroke={2} size={24} />
            </a>
            <a
              href="https://linktr.ee/patricklyons?fbclid=IwY2xjawPMrQFleHRuA2FlbQIxMABicmlkETE0YW5LTXc0SW9LM3JUWE5oc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnP5coViAzUgI_TC5v89JQuozTNdqUySPMq6-ufhZuQKi2ToazN8BeeXZGRx_aem_53IIpCNM_et9RVktQfkylw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <IconBrandLinktree stroke={2} size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="font-general mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-100">
        Copyright © {new Date().getFullYear()} — All Rights Reserved
      </div>
    </footer>
  );
}
