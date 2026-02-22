import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { BookingFormProps } from '@/app/models';
import { formContent } from '@/app/constants';

const BookingForm = ({
  step, 
  language, 
  onClose, 
  formData, 
  onSubmit, 
  setFormData, 
  isSubmitted, 
  setStep, 
  toggleStyle
}: BookingFormProps) => {
  return (
    <div className="p-6">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div>
                <h3 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  {formContent[language].step1.title}
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={formContent[language].step1.fullName}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={formContent[language].step1.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder={formContent[language].step1.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="mt-6 w-full px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{formContent[language].step1.next}</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Step 2: Tattoo Details */}
            {step === 2 && (
              <div>
                <h3 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  {formContent[language].step2.title}
                </h3>
                <div className="space-y-6">
                  {/* Styles */}
                  <div>
                    <label className="block mb-3 text-sm">{formContent[language].step2.styles}</label>
                    <div className="flex flex-wrap gap-2">
                      {formContent[language].step2.styleOptions.map((style) => (
                        <button
                          key={style}
                          onClick={() => toggleStyle(style)}
                          className={`px-4 py-2 border transition-all ${
                            formData.styles?.includes(style)
                              ? 'bg-accent text-accent-foreground border-accent'
                              : 'bg-transparent border-white/20 hover:border-accent/50'
                          }`}
                        >
                          {formData.styles?.includes(style) && <Check size={16} className="inline mr-2" />}
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color */}
                  <div>
                    <label className="block mb-3 text-sm">{formContent[language].step2.color}</label>
                    <div className="flex gap-4">
                      {['color', 'blackwhite'].map((colorOption, idx) => (
                        <button
                          key={colorOption}
                          onClick={() => setFormData({ ...formData, color: colorOption as 'color' | 'blackwhite' })}
                          className={`flex-1 px-4 py-3 border transition-all ${
                            formData.color === colorOption
                              ? 'bg-accent text-accent-foreground border-accent'
                              : 'bg-transparent border-white/20 hover:border-accent/50'
                          }`}
                        >
                          {formContent[language].step2.colorOptions[idx]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder={formContent[language].step2.location}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder={formContent[language].step2.size}
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder={formContent[language].step2.idea}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                  <input
                    type="text"
                    placeholder={formContent[language].step2.reference}
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ChevronLeft size={20} />
                    <span>{formContent[language].step2.back}</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{formContent[language].step2.next}</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {step === 3 && (
              <div>
                <h3 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  {formContent[language].step3.title}
                </h3>
                <div className="space-y-4">
                  <textarea
                    placeholder={formContent[language].step3.allergies}
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                  <input
                    type="text"
                    placeholder={formContent[language].step3.preferredDate}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isOver18}
                      onChange={(e) => setFormData({ ...formData, isOver18: e.target.checked })}
                      className="w-5 h-5 accent-accent"
                    />
                    <span>{formContent[language].step3.over18}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptsPrivacy}
                      onChange={(e) => setFormData({ ...formData, acceptsPrivacy: e.target.checked })}
                      className="w-5 h-5 accent-accent"
                    />
                    <span>{formContent[language].step3.privacy}</span>
                  </label>
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ChevronLeft size={20} />
                    <span>{formContent[language].step3.back}</span>
                  </button>
                  <button
                    onClick={onSubmit}
                    disabled={!formData.isOver18 || !formData.acceptsPrivacy}
                    className="flex-1 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formContent[language].step3.submit}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check size={40} className="text-accent-foreground" />
            </motion.div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {formContent[language].success.title}
            </h3>
            <p className="text-muted-foreground mb-8">{formContent[language].success.message}</p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              {formContent[language].success.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

};

export default BookingForm;
