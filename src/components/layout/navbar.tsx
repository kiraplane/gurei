'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useNavbarLinks } from '@/config/navbar-config';
import { useScroll } from '@/hooks/use-scroll';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';

interface NavBarProps {
  scroll?: boolean;
}

const customNavigationMenuTriggerStyle = cn(
  navigationMenuTriggerStyle(),
  'relative cursor-pointer border border-transparent bg-transparent text-base text-[#aaa9a4]',
  'hover:border-[#73e4ff]/40 hover:bg-[#24272d] hover:text-[#f3f0e8]',
  'focus:border-[#73e4ff]/40 focus:bg-[#24272d] focus:text-[#f3f0e8]',
  'focus-visible:ring-[#73e4ff]/40',
  'data-active:border-[#73e4ff]/60 data-active:bg-[#24272d] data-active:text-[#ff6b5e]',
  'data-[active=true]:border-[#73e4ff]/60 data-[active=true]:bg-[#24272d] data-[active=true]:text-[#ff6b5e]',
  'data-[state=open]:border-[#73e4ff]/40 data-[state=open]:bg-[#24272d] data-[state=open]:text-[#f3f0e8]'
);

function isCurrentPathActive(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Navbar({ scroll }: NavBarProps) {
  const t = useTranslations();
  const scrolled = useScroll(50);
  const menuLinks = useNavbarLinks();
  const localePathname = useLocalePathname();

  return (
    <section
      className={cn(
        'sticky inset-x-0 top-0 z-50 border-[#383b42] border-b py-4 text-[#f3f0e8] backdrop-blur-md transition-all duration-300',
        scroll
          ? scrolled
            ? 'bg-[#07080a]/94 shadow-[0_8px_24px_rgba(6,16,24,0.36)] supports-backdrop-filter:bg-[#07080a]/94'
            : 'bg-[#07080a]/88 supports-backdrop-filter:bg-[#07080a]/88'
          : 'bg-[#07080a]/94 supports-backdrop-filter:bg-[#07080a]/94'
      )}
    >
      <Container className="px-4">
        {/* desktop navbar */}
        <nav className="hidden lg:flex">
          {/* logo and name */}
          <div className="flex items-center">
            <LocaleLink href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="hidden whitespace-nowrap font-display text-lg font-bold tracking-wide xl:inline">
                {t('Metadata.name')}
              </span>
            </LocaleLink>
          </div>

          {/* menu links */}
          <div className="flex-1 flex items-center justify-center space-x-2">
            <NavigationMenu className="relative">
              <NavigationMenuList className="flex items-center">
                {menuLinks?.map((item, index) =>
                  item.items ? (
                    <NavigationMenuItem key={index} className="relative">
                      <NavigationMenuTrigger
                        data-active={
                          isCurrentPathActive(localePathname, item.href) ||
                          item.items.some((subItem) =>
                            isCurrentPathActive(localePathname, subItem.href)
                          )
                            ? 'true'
                            : undefined
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem, subIndex) => {
                            const isSubItemActive =
                              subItem.href &&
                              localePathname.startsWith(subItem.href);
                            return (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <LocaleLink
                                    href={subItem.href || '#'}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className={cn(
                                      'group flex select-none flex-row items-center gap-4 rounded-md',
                                      'p-2 leading-none no-underline outline-hidden transition-colors',
                                      'hover:bg-[#24272d] hover:text-[#ff6b5e]',
                                      'focus:bg-[#24272d] focus:text-[#ff6b5e]',
                                      isSubItemActive &&
                                        'bg-[#24272d] text-[#ff6b5e]'
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'flex size-8 shrink-0 items-center justify-center transition-colors',
                                        'bg-transparent text-[#aaa9a4]',
                                        'group-hover:bg-transparent group-hover:text-[#ff6b5e]',
                                        'group-focus:bg-transparent group-focus:text-[#ff6b5e]',
                                        isSubItemActive &&
                                          'bg-transparent text-[#ff6b5e]'
                                      )}
                                    >
                                      {subItem.icon ? subItem.icon : null}
                                    </div>
                                    <div className="flex-1">
                                      <div
                                        className={cn(
                                          'text-sm font-medium text-[#aaa9a4]',
                                          'group-hover:bg-transparent group-hover:text-[#ff6b5e]',
                                          'group-focus:bg-transparent group-focus:text-[#ff6b5e]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#ff6b5e]'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <div
                                          className={cn(
                                            'text-sm text-[#aaa9a4]',
                                            'group-hover:bg-transparent group-hover:text-[#c4c2bc]',
                                            'group-focus:bg-transparent group-focus:text-[#c4c2bc]',
                                            isSubItemActive &&
                                              'bg-transparent text-[#c4c2bc]'
                                          )}
                                        >
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {subItem.external && (
                                      <ArrowUpRightIcon
                                        className={cn(
                                          'size-4 shrink-0 text-[#aaa9a4]',
                                          'group-hover:bg-transparent group-hover:text-[#ff6b5e]',
                                          'group-focus:bg-transparent group-focus:text-[#ff6b5e]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#ff6b5e]'
                                        )}
                                      />
                                    )}
                                  </LocaleLink>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        active={
                          item.href
                            ? isCurrentPathActive(localePathname, item.href)
                            : false
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.title}
                        </LocaleLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-x-4">
            <LocaleSwitcher />
          </div>
        </nav>

        {/* mobile navbar */}
        <NavbarMobile className="lg:hidden" />
      </Container>
    </section>
  );
}
