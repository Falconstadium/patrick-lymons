import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinktree,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand */}
        <h3 className="font-bold font-gambetta">Patrick</h3>
        <div className="space-y-2">
          <h3 className="font-semibold font-general">
            Personal Training & Nutrition Coaching
          </h3>
          <p className="text-sm leading-relaxed font-gambetta">
            Unlock your potential and redefine your limits with structured
            training and nutrition guidance tailored for you.
          </p>
          <div className="flex justify-center md:justify-normal gap-4 mt-4">
            <a
              href="https://web.facebook.com/patrick.lyons.97594/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
              <IconBrandFacebook stroke={2} size={20} />
            </a>
            <a
              href="https://www.instagram.com/patricklyons/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
              <IconBrandInstagram stroke={2} size={20} />
            </a>
            <a
              href="https://linktr.ee/patricklyons?fbclid=IwY2xjawPMrQFleHRuA2FlbQIxMABicmlkETE0YW5LTXc0SW9LM3JUWE5oc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnP5coViAzUgI_TC5v89JQuozTNdqUySPMq6-ufhZuQKi2ToazN8BeeXZGRx_aem_53IIpCNM_et9RVktQfkylw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
              <IconBrandLinktree stroke={2} size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-6 text-center text-xs text-gray-100 font-general">
        Copyright © {new Date().getFullYear()} — All Rights Reserved
      </div>
    </footer>
  );
}
