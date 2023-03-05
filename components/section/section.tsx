import {ReactNode} from 'react';

type CtaType = {
    label: string,
    href: string,
}

type SectionType = { background: string, children?: ReactNode | ReactNode[], identifier?: string, cta?: CtaType, title?: string }

export default function Section({ children, identifier, background, cta, title }: SectionType) {
    return <section className={`section ${background && `section--bg-${background}`}`} id={identifier}>
        <div className={"container py-5"}>
            <div className="row">
                <div className="col-12 py-5">
                    { title && <h2 className="mt-3 mb-5 text-uppercase">{title}</h2> }
                    { children }
                    { cta && <div className="d-block text-center pt-5">
                        <a href={cta.href} className="btn btn-primary rounded-pill shadow p-4" target="_blank">{cta.label}</a>
                    </div>
                    }
                </div>
            </div>
        </div>
    </section>
}