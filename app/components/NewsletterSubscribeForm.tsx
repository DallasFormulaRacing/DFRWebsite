export default function NewsletterSubcribeForm() {
  return (
    <form
      action="https://dallasformularacing.us14.list-manage.com/subscribe/post?u=c56aeefe617f7ecf8f2c5c8c5&id=cc2cf31d1d&f_id=00f155e0f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate={true}>
      <div id="mc_embed_signup_scroll" className="flex flex-col gap-2">
        <div className="mc-field-group flex flex-col gap-1">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email mce_inline_error w-[146px] text-black p-2"
            id="mce-EMAIL"
            required
            aria-required="true"
            aria-invalid="true"
          />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          <div className="mce_inline_error text-red-500">
            This field is required.
          </div>
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>{" "}
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
        <div
          style={{
            position: "absolute",
            left: "-5000px",
          }}
          aria-hidden="true">
          <input
            type="text"
            name="b_c56aeefe617f7ecf8f2c5c8c5_cc2cf31d1d"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button bg-accent-green text-wh-0 text-md font-semibold w-32 h-12 rounded-md hover:cursor-pointer"
            />
            {/*End mc_embed_signup*/}
          </div>
        </div>
      </div>
    </form>
  );
}
